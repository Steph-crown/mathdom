import styled from "styled-components";
import { BREAKPOINTS } from "../../const";

export const BannerContainer = styled.div`
    padding: var(--padding-desktop);
    display: flex;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;
    width: 100%;

    h1 {
        color: var(--secondary);
    }

    h1 span {
        color: var(--error);
    }
    
    &>div {
        width: 45%;
    }

    .button-flex {
        margin-top: 48px;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        padding: var(--padding-tablet);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: var(--padding-mobile);
    }
`