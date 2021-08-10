import { HamburgerContainer } from "./style";

export const Hamburger = () => {
    return (
        <HamburgerContainer>
            <label htmlFor="check">
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </HamburgerContainer>
    );
};
