import { useEffect, useRef, useState } from "react";
import { Header, Logo, Img, Nav, NavList, List, Link, MenuIcon } from "./styled";
import LogoImg from "../../assets/logo.png";
import { FaBars, FaTimes} from "react-icons/fa";

export default function HeaderComponent() {
    const [menuIcon, setMenuIcon] = useState(<FaBars/>);
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            const newState = !prev;
            if(navRef.current) {
                navRef.current.classList.toggle("open", newState);
            }
            setMenuIcon(newState ? <FaTimes/> : <FaBars/>);
            return newState;
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if(headerRef.current) {
                headerRef.current.classList.toggle("sticky", window.scrollY > 0);
                navRef.current.classList.remove("open");
                setMenuIcon(<FaBars/>);
                setMenuOpen(false);
            }
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll("nav a");
    
            let scrollY = window.pageYOffset;
            let currentId = "";

            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    currentId = section.getAttribute("id");
                }
            });
            navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                const isActive = href === `#${currentId}`;
                link.classList.toggle("active", isActive);
                if(isActive) {
                    link.setAttribute("aria-current", "page");
                }
                else{
                    link.removeAttribute("aria-current");
                }
            });
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return(
        <Header ref={headerRef}>
            <Logo href="/">
                <Img src={LogoImg} alt="Logo"/>
            </Logo>
            <Nav ref={navRef} 
            role="navigation" 
            aria-label="Navegação principal"
            aria-expanded={menuOpen}>
                <NavList>
                    <List><Link href="#home">Home</Link>
                    </List>
                    <List><Link href="#sobre">Sobre</Link>
                    </List>
                    <List><Link href="#servicos">Serviços</Link>
                    </List>
                    <List><Link href="#projetos">Projetos</Link>
                    </List>
                    <List><Link href="#contato">Contato</Link>
                    </List>
                </NavList>
            </Nav>
            <MenuIcon onClick={toggleMenu} 
            role="button" 
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === "") && toggleMenu()}>
                {menuIcon}
            </MenuIcon>
        </Header>
    );
}