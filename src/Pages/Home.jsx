import React from 'react'
import HeroSection from '../assets/Components/HomePageComp/HeroSection'
import Accordian from '../assets/Components/CommonComp/Accordian'
import ContactForm from '../assets/Components/HomePageComp/ContactForm'
import CustomerReview from '../assets/Components/HomePageComp/CustomerReview'
import VehicleSlide from '../assets/Components/HomePageComp/VehicleSlide'

function Home() {
  return (
    <>
    <HeroSection/>
    <VehicleSlide/>
    <CustomerReview/>
    <ContactForm/>
    <Accordian/>
    
    </>
  )
}

export default Home