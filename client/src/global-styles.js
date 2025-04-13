import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        list-style: none;
        border: none;
        text-decoration: none;
        font-family: "Raleway", Arial, Helvetica, sans-serif;
        letter-spacing: 0.25px;
    }

    :root {
        --primary: #0a192f;
        --secondary: #112240;
        --text: #ccd6f6;
        --contrast: #64ffda;
        --complement: #8892b0;
        --h1-font: 8rem;
        --h2-font: 5rem;
        --p-font: 1.8rem;

        @media (max-width: 1320px) {
            --h1-font: 6rem;
            --h2-font: 4rem;
            --p-font: 1.6rem;
        }
        @media (max-width: 500px) {
            --h1-font: 4rem;
            --h2-font: 3rem;
            --p-font: 1.5rem;
        }
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar {
        width: 1rem;
        height: auto;
    }
    html::-webkit-scrollbar-track {
        background-color: var(--complement);
        border-radius: 1rem;
    }
    html::-webkit-scrollbar-thumb {
        background-color: var(--contrast);
        border-radius: 1rem;
    }

    body {
        background-color: var(--primary);
        color: var(--text);
    }

    section {
        width: 100%;
        height: auto;
        padding: 6rem 10rem;
        scroll-margin-top: 6rem;
        @media (max-width: 1320px) {
            padding: 5rem 2rem;
        }
        @media (max-width: 978px) {
            padding: 4rem 2rem;
        }
    }

    .heading {
        max-width: 600px;
        width: 100%;
        height: auto;
        text-align: left;
    }
    .heading h2 {
        color: var(--contrast);
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        font-size: var(--h2-font);
        font-weight: 700;
        line-height: 1;
        margin-bottom: 1rem;
    }
    .heading p {
        font-size: var(--p-font);
        font-weight: 400;
        line-height: 1.6;
    }

    .button {
        display: inline-block;
        margin-top: 2rem;
        max-width: 180px;
        width: 100%;
        height: auto;
        background-color: transparent;
        border: 0.2rem solid var(--contrast);
        border-radius: 2rem;
        padding: 1.4rem 1rem;
        text-align: center;
        color: var(--text);
        font-size: var(--p-font);
        font-weight: 500;
        transition: all 0.35s ease-out;
        
        &:hover {
            color: var(--contrast);
            box-shadow: inset 0 0 1.5rem var(--contrast), 0 0 1.5rem var(--contrast);
            scale: 1.1;
        }
    }

    ::selection {
        background-color: var(--complement);
    }
`