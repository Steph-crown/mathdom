import styled from "styled-components";
import { BREAKPOINTS } from "../../const";

export const HeaderContainer = styled.header`
    padding: 16px var(--padding-desktop);
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 2px;
    align-items: center;
    box-shadow: var(--nav-shadow);

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
    nav > * {
        margin: 0 1.4em;
    }

    div.hamburger {
        display: none;
    }

    div.auth {
        display: flex;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        div.auth {
            display: none;
        }

        div.hamburger {
            display: block;
        }
    }
`;

export const LinkH6 = styled.h6`
    cursor: pointer;
    color: ${(props) => (props.curr ? "var(--error)" : null)};

    &:hover {
        color: var(--error);
    }
`;
