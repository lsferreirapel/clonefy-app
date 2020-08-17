import styled from 'styled-components';

export const SidebarOptionDiv = styled.div`
    color: grey;
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
    transition: 200ms color ease-in;
    

    .nav-option {
        font-family: spotify-circular, spotify-circular-cyrillic, spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica, Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
        color: grey;
        display: flex;
        align-items: center;
        height: 40px;
        cursor: pointer;
        transition: 200ms color ease-in;
        text-decoration: none;
    }
    .nav-option:hover {
        font-family: spotify-circular, spotify-circular-cyrillic, spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica, Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
        color: white;
    }

    .playlist-name {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
        color: grey;
        text-decoration: none;
    }
    .playlist-name:hover {
        color: white;
    }

    .sidebarOption_icon {
        padding-left: 10px;
        padding-right: 10px;
        }

    :hover {
        color: white;
    }
`

