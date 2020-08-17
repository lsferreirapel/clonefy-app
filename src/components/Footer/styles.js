import styled from 'styled-components';

export const FooterDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 65px;
    width: 97%;
    background-color: #282828;
    padding: 20px;
`;

export const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    color: white;
    width: 300px;
`;

export const SongInfo = styled.div`
    color: white;

    h4 {
        margin-bottom: 5px;
    }

    p {
        font-size: 12px;
    }
`;

export const  AlbumLogo = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
`;

export const FooterCenter = styled.div`
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

    .footer__green {
        color: var(--primary);
    }

    .footer__icon {

    }

    .footer__icon:hover,
    .footer__green:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }

`;

export const FooterRight = styled.div`
    flex: 0.3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    :hover * .MuiSlider-track {
        color: var(--primary);
    }
    :hover * .MuiSlider-thumb {
        height: 13px;
    }
    :active * .MuiSlider-thumb {
        height: 13px;
    }
    :active * .MuiSlider-track {
        color: var(--primary);
    }

    * .MuiSlider-thumb {
        height: 0;
    }

    .MuiSlider-track, .MuiSlider-rail {
        height: 4px;
        border-radius: 3px;
    }

    * .MuiSlider-root {
        color: lightgray;
        width: 136px;
    }
`;


