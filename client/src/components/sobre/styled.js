import styled from "styled-components";

export const About = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const AboutContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3rem;

    @media (max-width: 978px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`
export const ImageBox = styled.figure`
    text-align: center;
`
export const Img = styled.img`
    display: inline-block;
    max-width: 550px;
    width: 100%;
    height: auto;

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
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 978px) {
        align-items: center;
        text-align: center;
    }
`
export const H3 = styled.h3`
    color: var(--contrast);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: var(--h2-font);
    font-weight: 700;
    line-height: 1;
`
export const H4 = styled.h4`
    margin: 1rem 0 2rem 0;
    font-size: var(--p-font);
    font-weight: 400;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.6;
`