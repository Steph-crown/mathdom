import { SolidButton, TransparentButton } from "../buttons/buttons";
import { BannerContainer } from "./style";
import Image from "next/image"

import BannerImage from "./../../public/banner-image.svg"


// let innerWidth = window.innerWidth

export const Banner = () => {
    let innerWidth = 0
    
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
                    src={BannerImage}
                    
                    alt="Banner Image"
                />


            </div>
        </BannerContainer>
    );
};
