import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      font-size: 62.5%;
    }

    body{
        margin: 0;
        padding: 0;
        height: 100dvh;
        list-style: none;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        color: --btn-color;
    }

    @font-face {
        font-family: 'Bellarina';
            src: url('/font/Bellarina.otf') format('opentype'),
                 url('/font/Bellarina.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        }

`