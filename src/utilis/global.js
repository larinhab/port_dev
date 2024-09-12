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

    [data-theme="dark"]{
        --background: #16191c;
        --text-color: #bfc2c7;
        --secondary-color: #333;
        --btn-color: #bfc2c7;
        --btn-hover: #333;
        --svg-color: #16191c;
        --svg-hover: #333;
    }

    
    [data-theme="light"]{
        --background: #bfc2c7;
        --text-color: #16191c;
        --secondary-color: #333;
        --btn-color: #bfc2c7;
        --btn-hover: #333;
        --svg-color: #bfc2c7;
        --svg-hover: #333;
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