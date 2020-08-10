import React from 'react';
import Logo from '../../assets/img/spotify-white-logo.jpg';
import Login ,{ WhiteLogo, ButtonSpotifyLogin } from './styles';
// import { Link } from 'react-router-dom';
import { accessUrl } from '../../services/spotify';

function LoginPage() {
    return (
        <Login>
            <WhiteLogo src={Logo} alt=""/>

            <ButtonSpotifyLogin href={accessUrl}>
                LOGIN WITH SPOTIFY
            </ButtonSpotifyLogin>
        </Login>
    )
}

export default LoginPage;