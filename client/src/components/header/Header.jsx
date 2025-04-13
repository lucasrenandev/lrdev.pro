import { useEffect, useRef, useState } from "react";
import { Header, Logo, Img, Nav, NavList, List, Link, MenuIcon } from "./styled";
import LogoImg from "../../assets/logo.png";
import { FaBars, FaTimes} from "react-icons/fa";

export default function HeaderComponent() {
    const [menuIcon, setMenuIcon] = useState(<FaBars/>);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if(!navRef.current.classList.contains("open")) {
            navRef.current.classList.add("open");
            setMenuIcon(<FaTimes/>)
        }
        else {
            navRef.current.classList.remove("open");
            setMenuIcon(<FaBars/>)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if(headerRef) {
                headerRef.current.classList.toggle("sticky", window.scrollY > 0);
            }
            navRef.current.classList.remove("open");
            setMenuIcon(<FaBars/>);
        }
        window.addEventListener("scroll", handleScroll);

        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll("nav a");

        const scrollSpy = () => {
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
                link.classList.toggle("active", href === `#${currentId}`);
            });
        };

        window.addEventListener("scroll", scrollSpy);
        scrollSpy();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", scrollSpy);
        }
    }, []);

    return(
        <Header ref={headerRef}>
            <Logo href="/">
                <Img src={LogoImg} alt="Logo"/>
            </Logo>
            <Nav ref={navRef} role="navigation" aria-label="Navegação principal">
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
            <MenuIcon onClick={toggleMenu}>
                {menuIcon}
            </MenuIcon>
        </Header>
    );
}