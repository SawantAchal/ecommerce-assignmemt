import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCard from '../homeCard/HomeCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';






const HomeSectionCarousel = () => {
    const [activeIndex , setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5},
    };

    const items = [1,1,1,1,1,1,1,1,1 ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ].map((item) => <HomeCard />)

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({item}) => setActiveIndex(item)

  return (
    <>
        <div className='relative px-4 lg:px-8 w-full border-yellow-950 border-solid'>
            <div className='relative p-5 '>
                <AliceCarousel items={items} disableButtonsControls responsive={responsive} infinite disableDotsControls onSlideChanged={syncActiveIndex} activeIndex={activeIndex}/>
                {
                    activeIndex !== items.length - 5 &&
                    <Button onClick={slideNext} className='z-50 bg-white' sx={{position:'absolute' ,top:'8rem' , right:'0rem' , transform:'translateX(50%) rotate(90deg)' , bgcolor:"white"}} variant='contained' aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
                    </Button>
                }
                {
                    activeIndex !== 0 && 
                    <Button onClick={slidePrev} className='z-50 bg-white' sx={{position:'absolute' ,top:'8rem' , left:'0rem' , transform:'translateX(-50%) rotate(-90deg)' , bgcolor:"white"}} variant='contained' aria-label='next' >
                        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
                    </Button>
                }
            </div>
        </div>
    </>

  )
}

export default HomeSectionCarousel