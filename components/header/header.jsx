import Link from "next/link";
import Image from "next/image";
import { HeaderContainer, LinkH6 } from "./style";
import { SolidButton, TransparentButton } from "../buttons/buttons";
import { Hamburger } from "../hamburger/hamburger";

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
            <LinkH6 curr={curr === name}>{name}</LinkH6>
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
            <div className="auth">
                <TransparentButton>sign up</TransparentButton>

                <SolidButton width="100px">Login</SolidButton>
            </div>

            <div className="hamburger">
                <Hamburger />
            </div>
        </HeaderContainer>
    );
};
