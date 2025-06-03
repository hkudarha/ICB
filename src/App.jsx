import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ICBLabsPage from './Components/HeroSection'
import BlockchainLanding from './Components/AboutUS'
import ICBLabsEcosystem from './Components/Ecosystem'
import Contact from './Components/ContectUs'
import Card from './Components/Card'
import FAQSection from './Components/FAQSection'
import UpcomingEvents from './Components/UpcomingEvents'
import AnimatedGLB from './Components/AnimatedGLB'

function App() {
  return (
    <>
    
    <Navbar/>
  <ICBLabsPage/>
  <BlockchainLanding/>
  {/* <ICBLabsEcosystem/> */}
  <Card/>
  <UpcomingEvents/>
  <FAQSection/>
<Contact/>

      {/* <AnimatedGLB />  */}
    </>
  )
}

export default App
