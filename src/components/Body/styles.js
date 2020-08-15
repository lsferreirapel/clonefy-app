import styled from 'styled-components';

export const BodyDiv = styled.div`
    padding: 10px;
    flex: 0.8;
    height: 100vh;
    color: white;
    overflow-y: overlay;
    background: linear-gradient(#292429, rgba(0, 0, 0, 1));

    ::-webkit-scrollbar{
        display: none
    }
`;

export const BodyInfo = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;

    img {
        height: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    }
`;

export const BodyInfoText = styled.div`
    flex: 1;
    text-align: left;

    h2 {
        font-size: 48px;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
    }
`;

export const BodySongs = styled.div`
    margin: 20px -30px;

`

export const BodyIcons = styled.div`
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        margin-right: 20px;
    }

    .body__shuffle {
        font-size: 80px !important;
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: var(--primary);
    }
    .body__shuffle:hover {
        transition: 100ms transform ease-in;
        transform: scale(1.08);
        
    }
`