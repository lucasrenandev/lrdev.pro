import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background-color: transparent;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    transition: all 0.35s ease-out;
    &.sticky {
        background-color: var(--secondary);
        box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 1320px) {
        padding: 0 2rem;
    }
`
export const Logo = styled.a`
    width: 80px;
    height: auto;
    transition: transform 0.35s ease-out;
    @media (max-width: 500px) {
        transform: scale(0.85);
    }   
`
export const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none;
`
export const Nav = styled.nav`
    @media (max-width: 978px) {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 26rem;
        height: 100vh;
        height: 100dvh;
        background-color: #1c2541;
        padding: 10rem 0;
        transition: right 0.35s ease-out;
        &.open {
            right: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
    @media (max-width: 978px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 500px) {
        gap: 4rem;
    }
`
export const List = styled.li`
    
`
export const Link = styled.a`
    position: relative;
    display: block;
    color: var(--text);
    font-size: var(--p-font);
    font-weight: 400;
    transition: color 0.35s ease-out;
    &:hover, &.active {
        color: var(--contrast);
    }
    &::before {
        content: "";
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 100%;
        height: 0.1rem;
        border-radius: 2rem;
        background-color: var(--contrast);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.35s ease-out;
    }
    &:hover::before {
        transform: scaleX(1);
    }
    &.active::before {
        transform: scaleX(1);
    }
    @media (max-width: 978px) {
        color: var(--text);
        font-size: 2.3rem;
        font-weight: 500;
    }
`
export const MenuIcon = styled.div`
    font-size: 2.3rem;
    color: #ffffff;
    cursor: pointer;
    display: none;
    @media (max-width: 978px) {
        display: block;
    }
`