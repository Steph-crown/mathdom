import { Carousel } from "../carousel/carousel";
import { ReviewContainer, ReviewSectionContainer } from "./style";

const colors = ["var(--error)", "var(--primary)", "var(--success)", "var(--warning)"]

let reviews = [
   {
       name: "Stephen",
       color: 0,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum faucibus in nunc. Sed cras mauris felis aliquet quis. Sed consectetur aliquet mauris sed dna, m mauris sed dna, mmndmx.  Sed consectetur aliquet "
    },
    {
        name: "TOBI ADEKUNLE",
        color: 1,
         review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum faucibus in nunc. Sed cras mauris felis aliquet quis. Sed consectetur aliquet mauris sed dna, m mauris sed dna, mmndmx.  Sed consectetur aliquet "
     },
     {
        name: "CIROMA USMAN",
        color: 2,
         review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum faucibus in nunc. Sed cras mauris felis aliquet quis. Sed consectetur aliquet mauris sed dna, m mauris sed dna, mmndmx.  Sed consectetur aliquet "
     },
     {
        name: "Ada",
        color: 3,
         review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum faucibus in nunc. Sed cras mauris felis aliquet quis. Sed consectetur aliquet mauris sed dna, m mauris sed dna, mmndmx.  Sed consectetur aliquet "
     },
];



const Review = ({name, color, review}) => {
    return (
        <ReviewContainer color={colors[color]}>
            <h6 className="cap">{name}</h6>
            <div>
                <div className="line"></div>
                <p>{review} <span>...</span></p>
            </div>
            
        </ReviewContainer>
    )
}


reviews = reviews.map(({name, color, review}) => (
    <Review key={name} {...{ name, color, review}} />
))


export const ReviewSection = () => {
    return (
        <ReviewSectionContainer>
            <h2>What our natives say</h2>
            <div>
                <Carousel>
                {reviews}
            </Carousel>
            </div>
        </ReviewSectionContainer>
    );
};



