import styled from "styled-components";

export const Home = styled.section`
    height: 100dvh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3rem;

    @media (max-width: 978px) {
        height: 100%;
        grid-template-columns: 1fr;
        gap: 0;
        text-align: center;
    }
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 978px) {
        align-items: center;
    }
`
export const LeftSide = styled.div`
    max-width: 600px;
    width: 100%;
    height: auto;

    @media (max-width: 978px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding-top: 7rem;
    }
`
export const Text = styled.p`
    color: var(--contrast);
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.25px;

    @media (max-width: 500px) {
        font-size: 1.4rem;
    }
`
export const H1 = styled.h1`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: var(--h1-font);
    font-weight: 700;
    line-height: 1;
    margin: 1rem 0;
    
    span {
        color: var(--contrast);
    }

    @media (max-width: 500px) {
        line-height: 1.2;
    }
`
export const Paragraph = styled.p`
    color: var(--text);
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.25px;
`
export const RightSide = styled.div`
    
`
export const Figure = styled.figure`
    text-align: center;
`
export const Img = styled.img`
    display: inline-block;
    max-width: 550px;
    width: 100%;
    height: auto;
    pointer-events: none;

    @media (max-width: 1320px) {
        max-width: 450px;
        width: 100%;
        height: auto;
    }
    @media (max-width: 500px) {
        max-width: 300px;
        width: 100%;
        height: auto;
    }
`