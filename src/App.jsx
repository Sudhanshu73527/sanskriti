import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import InfoCards from './components/Infocards/Infocards'
import SchoolFeatures from './components/SchoolFeatures/SchoolFeatures'
import Principal from './components/Principal/Principal'
import Chairmain from './components/Chairman/Chairmain'
import Fotter from './components/Fotter/Fotter'
import Testi from './components/Testi/Testi'
import StatsSection from './components/StatsSection/StatsSection'
import SchoolPrompts from './components/SchoolPrompts/SchoolPrompts'

const App = () => {
  return (
    <div>
      <Navbar/> <br />
      <Herosection/>
      <InfoCards/>
      <Principal/>
      <Chairmain/>
      <SchoolFeatures/>
      <StatsSection/>
      <SchoolPrompts/>
      <Testi/>
      <Fotter/>
    </div>
  )
}

export default App
