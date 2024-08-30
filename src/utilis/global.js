import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      font-size: 62.5%;
    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    [data-theme="dark"]{
        --bg: 'black';
        --background: linear-gradient(to bottom, #333 40%, #EB92BE 40%, #48AEDD 70%, #CBDB3E 100%);
        --text-color: '';
        --secondary-color: '';
        --btn-color: '';
        --btn-hover: '';
        --svg-color: '';
        --svg-hover: '';
    }

    
    [data-theme="light"]{
        --bg: 'black';
        --background: linear-gradient(to bottom, #f0f0f0 40%, #EB92BE 40%, #48AEDD 70%, #CBDB3E 100%);
        --text-color: '';
        --secondary-color: '';
        --btn-color: '';
        --btn-hover: '';
        --svg-color: '';
        --svg-hover: '';
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
    }

    @font-face {
        font-family: 'Bellarina';
            src: url('/font/Bellarina.otf') format('opentype'),
                 url('/font/Bellarina.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        }

`