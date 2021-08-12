import styled from "styled-components";
import { BREAKPOINTS } from "../../const";

export const WhatGoesOnContainer = styled.section`
    padding: 0em var(--padding-desktop);

    h2 {
        text-align: center;
        color: var(--secondary);
    }


    @media (max-width: ${BREAKPOINTS.tablet}) {
        padding: 0 var(--padding-tablet);
    }
    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 0 var(--padding-mobile);
    }
`

export const WhatGoesSub = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;
    margin: 6em 0;
    align-items: center;

    &:nth-child(2n) {
        flex-direction: row-reverse;
    }

    @media (max-width: ${BREAKPOINTS.postMobile}) {
        display: block;
    }
`

export const WhatGoesSubText = styled.div`
    width: 40%;
    margin-top: -42px;

    @media (max-width: ${BREAKPOINTS.desktop}) {
        width: 50%;
    }

    @media (max-width: ${BREAKPOINTS.postMobile}) {
        width: 100%;
    }


    &>* {
        margin: 0.75em 0;
    }
`

export const WhatGoesSubImage = styled.div`
    width: 43%;

    @media (max-width: ${BREAKPOINTS.postMobile}) {
        display: block;
    margin: 2em auto;
    width: 80%;
    }
    
`

export const WhatGoesOnIconContainer = styled.div`
    margin: 0 0 -42px -42px
`