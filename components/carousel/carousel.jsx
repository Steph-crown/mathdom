// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@material-ui/core";

import { CarouselContainer } from "./style";

// import TouchCarousel from "react-touch-carousel";

// export const CarouselComp = () => {
//     let items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!",
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!",
//         },
//     ];

//     return (
//         <Carousel
//             next={(next, active) =>
//                 console.log(`we left ${active}, and are now at ${next}`)
//             }
//             prev={(prev, active) =>
//                 console.log(`we left ${active}, and are now at ${prev}`)
//             }
//         >
//             {items.map((item, i) => (
//                 <Item key={i} item={item} />
//             ))}
//         </Carousel>
//     );
// };

// const Item = (props) => {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">Check it out!</Button>
//         </Paper>
//     );
// };

export const Carousel = ({children}) => {
    return <CarouselContainer>
        {children}
    </CarouselContainer>
};
