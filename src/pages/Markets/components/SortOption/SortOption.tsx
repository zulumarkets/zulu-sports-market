import { SortDirection } from 'constants/markets';
import React from 'react';
import styled from 'styled-components';
import { FlexDivRowCentered } from 'styles/common';

type SortOptionProps = {
    sortDirection: SortDirection;
    selected: boolean;
    disabled?: boolean;
    onClick?: (param: any) => void;
};

const SortOption: React.FC<SortOptionProps> = ({ sortDirection, selected, disabled, onClick, children }) => {
    return (
        <Container className={`${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`} onClick={onClick}>
            <SortIcon selected={selected} sortDirection={sortDirection} />
            <SortText>{children}</SortText>
        </Container>
    );
};

const Container = styled(FlexDivRowCentered)`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 102.6%;
    letter-spacing: 0.035em;
    cursor: pointer;
    border-bottom: 5px solid transparent;
    margin-left: 26px;
    &.disabled {
        cursor: default;
        opacity: 0.4;
    }
    &:hover {
        color: ${(props) => props.theme.textColor.quaternary};
    }
    color: ${(props) => props.theme.textColor.secondary};
    margin-right: 40px;
    padding-bottom: 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    margin-bottom: 10px;
    justify-content: flex-start;
`;

const SortText = styled.span`
    text-transform: uppercase;
`;

const SortIcon = styled.i<{ selected: boolean; sortDirection: SortDirection }>`
    font-size: ${(props) => (props.selected && props.sortDirection !== SortDirection.NONE ? 22 : 18)}px;
    margin-right: 10px;
    &:before {
        font-family: ExoticIcons !important;
        content: ${(props) =>
            props.selected
                ? props.sortDirection === SortDirection.ASC
                    ? "'\\0046'"
                    : props.sortDirection === SortDirection.DESC
                    ? "'\\0047'"
                    : "'\\0045'"
                : "'\\0045'"};
        color: ${(props) => props.theme.textColor.secondary};
    }
`;

export default SortOption;
