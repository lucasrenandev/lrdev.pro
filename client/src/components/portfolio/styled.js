import styled from "styled-components";

export const Portfolio = styled.section`

`
export const PortfolioContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: stretch;
    gap: 3rem;
    margin-top: 4rem;
    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`
export const Box = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 0.2rem solid var(--contrast);
    border-radius: 2rem;
    padding: 1rem;
    transition: all 0.35s ease-out;
    &:hover {
        box-shadow: 0 0 1rem var(--contrast);
        transform: scale(1.02);
    }
`
export const ImgBox = styled.figure`
    
`
export const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 2rem;
    pointer-events: none;
`
export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const H3 = styled.h3`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 2rem 0 1rem 0;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
`