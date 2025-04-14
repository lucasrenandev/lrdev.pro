import styled from "styled-components";

export const Cta = styled.section`
    
`
export const CtaContent = styled.div`
    border: 0.2rem solid var(--contrast);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 2rem;
    border-radius: 2rem;
    transition: all 0.35s ease-out;
    &:hover {
        box-shadow: 0 0 1rem var(--contrast);
        transform: scale(1.02);
    }
`
export const H2 = styled.h2`
    color: var(--contrast);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: var(--h2-font);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.6;
`