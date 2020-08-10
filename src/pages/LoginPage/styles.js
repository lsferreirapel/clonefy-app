import styled from 'styled-components';

const Login = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
`;

export const WhiteLogo = styled.img`
    width: 100%
`;

export const ButtonSpotifyLogin = styled.a`
    padding: 20px;
    border-radius: 99px;
    background: var(--primary);
    font-weight: bold;
    color: white;
    text-decoration: none;
`;

export default Login;