import styled from 'styled-components';

export const SidebarOptionDiv = styled.div`
    color: grey;
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
    transition: 200ms color ease-in;

    p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
    }

    .sidebarOption_icon {
    padding-left: 10px;
    padding-right: 10px;
    }

    :hover {
        color: white;
    }
`

