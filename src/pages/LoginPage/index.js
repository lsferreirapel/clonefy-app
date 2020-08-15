import React from 'react';
import Logo from '../../assets/img/clonefy/clonefy-white-com-logo.png';
import Login ,{ WhiteLogo, ButtonSpotifyLogin } from './styles';
// import { Link } from 'react-router-dom';
import { accessUrl } from '../../services/spotify';

function LoginPage() {
    document.title = "Clonefy - Login";

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