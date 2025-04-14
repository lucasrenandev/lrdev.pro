import styled from "styled-components";

export const Contact = styled.section`

`
export const ContactContent = styled.div`
    margin-top: 4rem;
    display: grid;
    place-items: center;
`
export const ContactForm = styled.form`
    max-width: 550px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button-box {
        max-width: 180px;
        width: 100%;
        height: auto;
        .button {
            width: 100%;
            height: auto;
            margin: 0;
            cursor: pointer;
        }
    }
`
export const InputField = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
`
export const Label = styled.label`
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
`
export const Input = styled.input`
    display: block;
    width: 100%;
    height: auto;
    background-color: transparent;
    border: 0.2rem solid var(--contrast);
    border-radius: 2rem;
    padding: 1.4rem 2rem;
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--text);
    transition: all 0.35s ease-out;
    &::placeholder {
        color: var(--complement);
    }
    &:focus {
        box-shadow: 0 0 1rem var(--contrast);
    }
`
export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 22rem;
    background-color: transparent;
    border: 0.2rem solid var(--contrast);
    border-radius: 2rem;
    padding: 1.4rem 2rem;
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--text);
    resize: none;
    transition: 0.35s ease-out;
    &::placeholder {
        color: var(--complement);
    }
    &:focus {
        box-shadow: 0 0 1rem var(--contrast);
    }
`