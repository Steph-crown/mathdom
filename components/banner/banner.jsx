import { SolidButton, TransparentButton } from "../buttons/buttons";
import { BannerContainer } from "./style";
import Image from "next/image"


// let innerWidth = window.innerWidth

export const Banner = () => {

    if (process.browser) {
        let innerWidth = window.innerWidth
}
    return (
        <BannerContainer>
            <div>
                <h1>
                    The kingdom where <br />
                    <span>Math</span>ematics <br />
                    <span>dom</span>inates
                </h1>
                <div className="button-flex">
                    <SolidButton>get started</SolidButton>
                    <TransparentButton>login</TransparentButton>
                </div>
            </div>
            <div>
                {/* {console.log(window)} */}
                <Image
                    src="/banner-image.svg"
                    height={357}
                    width={(574 / 1152) * innerWidth }
                    alt="Banner Image"
                    unoptimized={true}
                />
            </div>
        </BannerContainer>
    );
};
