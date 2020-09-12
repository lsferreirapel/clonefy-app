import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root {
    --primary: #1ed760;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%
    font-family: spotify-circular, spotify-circular-cyrillic, spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica, Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: spotify-circular, spotify-circular-cyrillic, spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica, Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    cursor: pointer;
    color: var(--white);
  }
  button:focus {
    outline-offset: 0px;
    outline: 0px auto -webkit-focus-ring-color;
  }

  @font-face {
    font-family: spotify-circular;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Light.afd9ab26.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Light.2a78c017.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Light.89e4be2e.ttf) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Book.3466e0ec.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Book.ea8d19db.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Book.a357677a.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
  font-family: spotify-circular;
  src: url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Bold.8d0a45cc.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Bold.10e93738.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Bold.7eb7d0f7.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  }

  @font-face {
    font-family: spotify-circular;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Black.c21e63c5.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Black.effa986f.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIv3T-Black.ce8ef887.ttf) format("truetype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-arabic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Light.dde45e52.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Light.5c7ed8d8.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Light.f0833f3b.otf) format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-arabic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Book.aaab109b.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Book.3ad862e2.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Book.f0effcd1.otf) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-arabic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Bold.317e96e5.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Bold.9ddc7126.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Bold.f97cb921.otf) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-arabic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Black.c32951f4.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Black.05b31ded.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIAraOnly-Black.6d6a4c25.otf) format("opentype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-hebrew;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Light.4884da16.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Light.2128eeac.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Light.2e1df62a.otf) format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-hebrew;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Book.cb36b6ec.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Book.ad2b13cd.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Book.fae4aece.otf) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-hebrew;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Bold.ef043f44.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Bold.9f406804.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Bold.57b36278.otf) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-hebrew;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Black.217fb21f.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Black.0a11e734.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUIHbrOnly-Black.11abebe4.otf) format("opentype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-cyrillic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Light.55fa9f4a.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Light.034997d0.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Light.b10eb959.otf) format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-cyrillic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Book.6a858994.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Book.918c53b8.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Book.15af6ebe.otf) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-cyrillic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Bold.30dc9fb2.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Bold.909126fc.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Bold.67641b90.otf) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: spotify-circular-cyrillic;
    src: url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Black.f5526fc4.woff2) format("woff2"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Black.7536a73f.woff) format("woff"), url(https://open.scdn.co/cdn/fonts/CircularSpUICyrOnly-Black.50cd1ca9.otf) format("opentype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;