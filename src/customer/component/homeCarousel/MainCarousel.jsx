import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from '../../../data/MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = MainCarouselData.map((item)=> <img className="cursor-pointer" role='presentation' src={item.image}  alt=''/>)

const MainCarousel = () => {
  return (
    <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={1000} infinite/>
  )
}

export default MainCarousel
