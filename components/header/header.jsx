import Link from "next/link";
import Image from "next/image";
// import { HeaderContainer } from "./style";

import styled from 'styled-components';
import { BREAKPOINTS } from '../../const';



const HeaderContainer = styled.header`
    padding: 16px var(--padding-desktop);
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 2px;
    align-items: center;

    nav {
        display: flex;
        justify-content: center;
        min-height: 2px;
        align-items: center;

        @media (max-width: ${BREAKPOINTS.tablet}) {
            display: none;
            margin: 0;
        }
    }
    nav>* {
        margin: 0 1em;
    }

`

export const Header = ({ curr }) => {
    let links = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Games", path: "/games" },
        { name: "Forum", path: "/forum" },
        { name: "Solved Problems", path: "/solved-problems" },
    ];

    links = links.map(({ name, path }) => (
        <Link href={path} key={name} passHref={true}>
            <h6>{name}</h6>
        </Link>
    ));


    return (
        <HeaderContainer>
            <Image
                src="/Main Logo With Text.svg"
                alt="Logo with text"
                width="140"
                height="40"
            />
            
            <nav>{links}</nav>

        </HeaderContainer>
    );
};
