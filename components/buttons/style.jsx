import styled from "styled-components"

export const TransparentContainer = styled.button`
    background: transparent;
    color:  ${props => props.textColor || "var(--error)"};
    outline: none;
    border: none;
    padding: 24px 32px;
    border-radius: 12px;

    &:hover {
        color: var(--error-75);
    }
`


export const SolidContainer = styled(TransparentContainer)`
    background: ${props => props.color || "var(--error)"};
    ${props => console.log(props)}
    color:  ${props => props.textColor || "var(--starkwhite)"};
    min-width: ${props => props.width};
    font-weight: 700;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 2px;

    &:hover {
        color: var(--starkwhite);
        background: ${props => props.textColor || "var(--error)"};
    }
`