import styled from "styled-components";

export const HamburgerContainer = styled.div`
    label {
        display: flex;
        flex-direction: column;
        width: 36px;
        cursor: pointer;
        align-items: flex-end;
    }

    label span {
        background: var(--secondary);
        border-radius: 10px;
        height: 3px;
        margin: 3px 0;
        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
        width: 50%;
    }

    span:nth-of-type(2) {
        width: 100%;
    }

    span:nth-of-type(3) {
        width: 75%;
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(1px, 8px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg) translate(4px, 9px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(7px, 0px) rotatez(45deg);
    }
`;
