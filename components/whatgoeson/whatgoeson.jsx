import Image from "next/image";
import { Solid, SolidButton, SolidButtonButton } from "../buttons/buttons";
import { Icon } from "../icons/style";
import BlogIcon from "./../../public/blog-icon.svg";
import BlogIllustration from "./../../public/blog-illustration.svg";
import ForumIcon from "./../../public/forum-icon.svg";
import ForumIllustration from "./../../public/forum-illustration.svg";
import GamesIcon from "./../../public/games-icon.svg";
import GamesIllustration from "./../../public/games-illustration.svg";
import ProblemIcon from "./../../public/problem-icon.svg";
import ProblemIllustration from "./../../public/problem-illustration.svg";
import {
    WhatGoesOnContainer,
    WhatGoesOnIconContainer,
    WhatGoesSub,
    WhatGoesSubImage,
    WhatGoesSubText,
} from "./style";
const items = [
    {
        icon: BlogIcon,
        name: "Blog",
        content:
            "Here you read about interesting math topics, arguments in math, interesting facts related to mathematics.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum faucibus in nunc. Sed cras mauris felis aliquet quis. Sed consectetur aliquet mauris sed dna, m mauris sed dna, mmndmx. Sed consectetur aliquet ...",
        illustration: BlogIllustration,
        color: "var(--success)",
    },
    {
        icon: GamesIcon,
        name: "Games",
        content:
            "All calculate and no play makes Saparudeen a dull boy. Puzzles, brain teasers, and different types of math games are available for you to play. Compete with your friends, and strangers. Climb up the leaderboard and conquer the world  mauris sed dna, m mauris sed dna, mmndmx. Sed consectetur aliquet .",
        illustration: GamesIllustration,
        color: "var(--primary)",
    },
    {
        icon: ForumIcon,
        name: "Forum",
        content:
            "One rule of the kingdom is that we’ve got each other’s back. Do you have assignments, and questions you don’t understand which you’ll like to get solutions to? Jump in here drop your questions, and our amazing and very intellectual natives will make light of the work and supply solutions to you.",
        illustration: ForumIllustration,
        color: "var(--warning)",
    },

    {
        icon: ProblemIcon,
        name: "Solved Problem",
        content:
            "One rule of the kingdom is that we’ve got each other’s back. Do you have assignments, and questions you don’t understand which you’ll like to get solutions to? Jump in here drop your questions, and our amazing and very intellectual natives will make light of the work and supply solutions to you.",
        illustration: ProblemIllustration,
        color: "var(--error)",
    },
];

const WhatGoesOnFlex = ({ icon, name, content, illustration, color }) => {
    return (
        <WhatGoesSub>
            <WhatGoesSubImage>
                <Image
                    src={illustration}
                    alt={name + "illustration"}
                    height="340"
                />
            </WhatGoesSubImage>
            <WhatGoesSubText>
                <WhatGoesOnIconContainer>
                    <Image src={icon} alt={name} />
                </WhatGoesOnIconContainer>

                <h3>{name}</h3>
                <h6>{content}</h6>
                <SolidButton textColor={color} color="var(--white)">
                    get in{" "}
                    <Icon
                        size="1.1em"
                        className="fas fa-arrow-right"
                        margin="0 0 0 14px"
                    ></Icon>
                </SolidButton>
            </WhatGoesSubText>
        </WhatGoesSub>
    );
};

const itemsJSX = items.map((item) => (
    <WhatGoesOnFlex {...item} key={item.name} />
));

export const WhatGoesOn = () => {
    return (
        <WhatGoesOnContainer>
            <h2>What goes on here</h2>
            {itemsJSX}
        </WhatGoesOnContainer>
    );
};
