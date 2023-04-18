import React from 'react';
import styled from 'styled-components';
import { FlexDivColumnCentered, FlexDivRow } from 'styles/common';
// import Footer from './Footer';
import { ReactComponent as HomepageSportsComingSoon } from 'assets/images/home-sports-coming-soon.svg';
import SPAAnchor from 'components/SPAAnchor';
import { buildHref } from 'utils/routes';
import ROUTES from 'constants/routes';
import { useTranslation } from 'react-i18next';

const COMING_SOON = true;

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <ContentContainer>
                {COMING_SOON && <StyledHomepageSportsComingSoon />}
                {!COMING_SOON && (
                    <SPAAnchor href={buildHref(ROUTES.Markets.Home)}>
                        <DappButtonContainer>
                            {t('common.launch-dapp')}
                            <RightIcon />
                        </DappButtonContainer>
                    </SPAAnchor>
                )}
            </ContentContainer>
            {/* <Footer /> */}
        </>
    );
};

const ContentContainer = styled(FlexDivColumnCentered)`
    align-items: center;
`;

const StyledHomepageSportsComingSoon = styled(HomepageSportsComingSoon)`
    @media (max-width: 991px) {
        width: 100%;
        height: 100%;
    }
`;

const DappButtonContainer = styled(FlexDivRow)`
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    text-transform: uppercase;
    border-radius: 10px;
    height: 54px;
    padding: 11px 15px 11px 18px;
    background: ${(props) => props.theme.button.background.secondary};
    color: ${(props) => props.theme.button.textColor.primary};
    a {
        color: ${(props) => props.theme.button.textColor.primary};
    }
`;

const RightIcon = styled.i`
    font-size: 28px;
    font-weight: 700;
    margin-left: 10px;
    margin-top: -2px;
    &:before {
        font-family: ExoticIcons !important;
        content: '\\004B';
        color: ${(props) => props.theme.button.textColor.primary};
    }
`;

export default Home;
