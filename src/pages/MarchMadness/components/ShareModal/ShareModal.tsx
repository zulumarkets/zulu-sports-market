import twitterIcon from 'assets/images/march-madness/twitter-icon.svg';
import background from 'assets/images/march-madness/flexcard-background.png';
import styled from 'styled-components';
import React, { CSSProperties, useCallback, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import Match from '../Match';
import { MatchProps } from '../Match/Match';
import { getOnImageError, getTeamImageSource } from 'utils/images';
import { teamsData } from 'constants/marchMadness';
import { isFirefox } from 'utils/device';
import { toast } from 'react-toastify';
import { LINKS } from 'constants/links';
import { defaultToastOptions, getErrorToastOptions, getSuccessToastOptions } from 'config/toast';
import { toPng } from 'html-to-image';
import { TAGS_FLAGS } from 'constants/tags';

type ShareModalProps = {
    final4Matches: MatchProps[];
    handleClose: () => void;
};

const IMAGE_NAME = 'BracketImage.png';
const TWITTER_MESSAGE = '%0AI picked the {{winnerTeam}} to cut the nets down in Houston! How about you, anon?';
const TWITTER_MESSAGE_PASTE = '%0A<PASTE YOUR IMAGE>';
const TWITTER_MESSAGE_UPLOAD = `%0A<UPLOAD YOUR ${IMAGE_NAME}>`;

const ShareModal: React.FC<ShareModalProps> = ({ final4Matches, handleClose }) => {
    const { t } = useTranslation();

    const semiFinalFirst = final4Matches[0];
    const semiFinalSecond = final4Matches[1];
    const finalMatch = final4Matches[2];

    const winnerTeamId = finalMatch.matchData.isHomeTeamSelected
        ? finalMatch.matchData.homeTeamId
        : finalMatch.matchData.awayTeamId;
    const winnerTeamName = teamsData.find((team) => team?.id === winnerTeamId)?.name;

    const [winnerLogoSrc, setWinnerLogoSrc] = useState(
        getTeamImageSource(winnerTeamName || '', TAGS_FLAGS.NCAA_BASKETBALL)
    );
    const [isLoading, setIsLoading] = useState(false);
    const [toastId, setToastId] = useState<string | number>(0);

    const ref = useRef<HTMLDivElement>(null);

    // Download image desktop: clipboard.write not supported/enabled in Firefox
    const useDownloadImage = isFirefox();

    const saveImageAndOpenTwitter = useCallback(
        async (toastIdParam: string | number) => {
            if (!isLoading) {
                if (ref.current === null) {
                    return;
                }

                try {
                    // In order to improve image quality enlarge image by 2.
                    // Twitter is trying to fit into 504 x 510 with the same aspect ratio, so when image is smaller than 504 x 510, there is quality loss.
                    const aspectRatio = 2;
                    const canvasWidth = ref.current.clientWidth * aspectRatio;
                    const canvasHeight = ref.current.clientHeight * aspectRatio;

                    const base64Image = await toPng(ref.current, { canvasWidth, canvasHeight });

                    if (useDownloadImage) {
                        // Download image
                        const link = document.createElement('a');
                        link.href = base64Image;
                        link.download = IMAGE_NAME;
                        document.body.appendChild(link);
                        link.click();
                        // Cleanup the DOM
                        document.body.removeChild(link);
                    } else {
                        // Save to clipboard
                        const b64Blob = (await fetch(base64Image)).blob();
                        const cbi = new ClipboardItem({
                            'image/png': b64Blob,
                        });
                        await navigator.clipboard.write([cbi]); // not supported by FF
                    }

                    if (ref.current === null) {
                        return;
                    }

                    const twitterLinkWithStatusMessage =
                        LINKS.TwitterTweetStatus +
                        LINKS.Overtime +
                        TWITTER_MESSAGE.replace('{{winnerTeam}}', winnerTeamName || '') +
                        (useDownloadImage ? TWITTER_MESSAGE_UPLOAD : TWITTER_MESSAGE_PASTE);

                    toast.update(
                        toastIdParam,
                        getSuccessToastOptions(
                            <>
                                {!useDownloadImage && (
                                    <>
                                        {t('market.toast-message.image-in-clipboard')}
                                        <br />
                                    </>
                                )}
                                {t('market.toast-message.open-twitter')}
                            </>
                        )
                    );

                    setTimeout(() => {
                        window.open(twitterLinkWithStatusMessage);
                    }, defaultToastOptions.autoClose);
                    handleClose();
                } catch (e) {
                    console.log(e);
                    setIsLoading(false);
                    toast.update(toastIdParam, getErrorToastOptions(t('market.toast-message.save-image-error')));
                }
            }
        },
        [isLoading, useDownloadImage, handleClose, t, winnerTeamName]
    );

    const onTwitterShareClickHandler = () => {
        if (!isLoading) {
            const id = toast.loading(
                useDownloadImage ? t('market.toast-message.download-image') : t('market.toast-message.save-image')
            );
            setToastId(id);
            setIsLoading(true);

            // If image creation is not postponed with timeout toaster is not displayed immediately, it is rendered in parallel with toPng() execution.
            // Function toPng is causing UI to freez for couple of seconds and there is no notification message during that time, so it confuses user.
            setTimeout(() => {
                saveImageAndOpenTwitter(id);
            }, 300);
        }
    };

    const onModalClose = () => {
        if (isLoading) {
            toast.update(toastId, getErrorToastOptions(t('market.toast-message.save-image-cancel')));
        }
        handleClose();
    };

    return (
        <ReactModal isOpen shouldCloseOnOverlayClick={true} onRequestClose={onModalClose} style={customStyle}>
            <Container ref={ref}>
                <CloseIcon className={`icon icon--close`} onClick={handleClose} />
                <ContentWrapper>
                    <Text margin="13px 0 17px 0">{t('march-madness.brackets.modal-share.header')}</Text>
                    <MatchRow>
                        <Match
                            matchData={semiFinalFirst.matchData}
                            winnerTeamId={semiFinalFirst.winnerTeamId}
                            isBracketsLocked={semiFinalFirst.isBracketsLocked}
                            isTeamLostInPreviousRounds={semiFinalFirst.isTeamLostInPreviousRounds}
                            updateBrackets={() => {}}
                            height={semiFinalFirst.height}
                            isReadOnly={true}
                            margin="0 8px 0 0"
                        />
                        <Match
                            matchData={semiFinalSecond.matchData}
                            winnerTeamId={semiFinalSecond.winnerTeamId}
                            isBracketsLocked={semiFinalSecond.isBracketsLocked}
                            isTeamLostInPreviousRounds={semiFinalSecond.isTeamLostInPreviousRounds}
                            updateBrackets={() => {}}
                            height={semiFinalSecond.height}
                            isReadOnly={true}
                            margin="0 0 0 8px"
                        />
                    </MatchRow>
                    <MatchRow>
                        <Match
                            matchData={finalMatch.matchData}
                            winnerTeamId={finalMatch.winnerTeamId}
                            isBracketsLocked={finalMatch.isBracketsLocked}
                            isTeamLostInPreviousRounds={finalMatch.isTeamLostInPreviousRounds}
                            updateBrackets={() => {}}
                            height={finalMatch.height}
                            isReadOnly={true}
                            margin="7px 0 0 0"
                        />
                    </MatchRow>
                    <Logo>
                        <TeamLogo
                            alt="Winner team logo"
                            src={winnerLogoSrc}
                            onError={getOnImageError(setWinnerLogoSrc, TAGS_FLAGS.NCAA_BASKETBALL, true)}
                        />
                    </Logo>
                    <Text margin="16px 0 0 0">
                        {t('march-madness.brackets.modal-share.user-selection', { team: winnerTeamName })}
                    </Text>
                </ContentWrapper>
                <Button style={buttonStyle} onClick={onTwitterShareClickHandler}>
                    {t('march-madness.brackets.modal-share.share')}
                    <TwitterIcon alt="Twitter icon" src={twitterIcon} />
                </Button>
            </Container>
        </ReactModal>
    );
};

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        background: 'transparent',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0px 0px 59px 11px #1A1C2B',
        overflow: 'visibile',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        zIndex: '1501',
    },
};

const buttonStyle: CSSProperties = {
    position: 'absolute',
    bottom: '-50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'NCAA' !important",
    fontSize: '22px',
    color: '#021631',
    textTransform: 'uppercase',
    background: '#FFFFFF',
    border: '1px solid #000000',
    borderRadius: '0',
    width: '186px',
    height: '38px',
    marginTop: '11px',
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 383px;
    height: 510px;
    background: url('${background}');
    background-size: 383px 510px;
    border-radius: 10px;
`;

const CloseIcon = styled.i`
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 20px;
    cursor: pointer;
    color: #ffffff;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 323px;
    height: 325px;
    margin-top: 99px;
    background: #ffffff1a;
    border-radius: 6px;
`;

const Text = styled.span<{ margin?: string }>`
    font-family: 'NCAA' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    opacity: 1;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

const MatchRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Logo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11px;
`;

const TeamLogo = styled.img`
    width: 80px;
`;

const TwitterIcon = styled.img`
    margin-left: 5px;
`;

export default React.memo(ShareModal);
