import styled from "styled-components"

export const TransparentContainer = styled.button`
    background: transparent;
    color: var(--error);
    outline: none;
    border: none;
    padding: 16px 32px;
    border-radius: 12px;

    &:hover {
        color: var(--error-75);
    }
`


export const SolidContainer = styled(TransparentContainer)`
    background: var(--error);
    color: var(--starkwhite);
    min-width: ${props => props.width};
    font-weight: 700;

    &:hover {
        color: var(--starkwhite);
        background: var(--error-75);
    }
`