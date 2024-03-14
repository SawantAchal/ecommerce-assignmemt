import React from 'react'
import MainCarousel from '../component/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../component/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../data/Mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col'>
        <HomeSectionCarousel data = {mens_kurta} sectionName={`men's Kurta`}/>
        <HomeSectionCarousel data = {mens_kurta} sectionName={`men's Shoes`}/>
        {/* <HomeSectionCarousel data = {mens_kurta}/>
        <HomeSectionCarousel data = {mens_kurta}/> */}
        </div>
    </div>
  )
}

export default HomePage