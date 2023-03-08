import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: #00875f;
        --green-dark: #015f43;
        --green-light: #00b37e;
        --red: #f75a68;
        --red-dark: #aa2834;
        --background: #202024;
        --background-dark: #121214;
        --shape-principal: #202024;
        --shape-secundary: #29292E;
        --shape-tertiary: #323238;
        --placeholder: #7C7C8A;
        --text: #C4C4CC;
        --title: #E1E1E6;
        --white: #fff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    } 
    
    body {
        background: var(--background);
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text);

    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--shape-principal);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        

        &:hover {
            filter: brightness(1.5);
        }
    }

`;