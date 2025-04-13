import styled from "styled-components";

export const Services = styled.section`

`
export const ServicesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    align-items: stretch;
    margin-top: 4rem;

    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`
export const Box = styled.div`
    height: 100%;
    border: 0.2rem solid var(--contrast);
    border-radius: 2rem;
    padding: 2rem;
    transition: transform 0.35s ease-out, box-shadow 0.35s ease-out;

    &:hover {
        box-shadow: 0 0 1rem var(--contrast);
        transform: scale(1.02);
    }
`
export const Icon = styled.i`
    color: var(--contrast);
    font-size: 2rem;
`
export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.5rem 0;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.6;
`