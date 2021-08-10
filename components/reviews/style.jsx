import styled from "styled-components"
import { BREAKPOINTS } from "../../const";

export const ReviewSectionContainer = styled.div`
    padding: var(--padding-desktop);
    

    h2 {
        color: var(--secondary);
        text-align: center;
    }

    &>div {
        margin: 1.6em 0;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        padding: 0em var(--padding-tablet);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 0em var(--padding-mobile);
    }
`


export const ReviewContainer = styled.div`
    background-color: var(--starkwhite);
    box-shadow: var(--box-shadow-1);
    border-radius: 8px;
    padding: 32px;
    width: 300px;
    min-height: 2px;

    p {
        color: var(--body-text);
    }

    p span {
        color: var(--error);
    }

    margin: 1.6em 2em;

    div.line {
        width: 1px;
        height: 240px;
        background-color: ${props => props.color};
        margin-right: 1em;
    }

    &>div {
        margin-top: 1em;
        display: flex;
        min-height: 2px;
        align-items: center;
    }
    h6.cap {
        color: ${props => props.color};
    }



    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: 260px;
        

        div.line {
            height: 180px
        }
    }

    @media (max-width: ${BREAKPOINTS.postMobile}) {
        width: 260px;margin: 1.6em 1em;
        div.line {
            height: 180px
        }
    }

    @media (max-width: 651px) {
        width: 220px;
        margin: 1.6em 1em;
        div.line {
            height: 260px
        }
    }

    @media (max-width: 545px) {
        width: 75%;
        div.line {
            height: 180px
        }
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        width: 100%;

    }
    
`