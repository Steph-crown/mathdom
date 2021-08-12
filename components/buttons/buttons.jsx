import { SolidContainer, TransparentContainer } from "./style";

// Transparent Button
export const TransparentButton = ({ children }) => {
    return <TransparentContainer>{children}</TransparentContainer>;
};

// Solid Button, variable width
export const SolidButton = ({children, width, color, textColor}) => {
    return <SolidContainer color={color} width={width} textColor={textColor} >{children}</SolidContainer>
}