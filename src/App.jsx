import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import InfoCards from './components/Infocards/Infocards'
import SchoolFeatures from './components/SchoolFeatures/SchoolFeatures'
import Principal from './components/Principal/Principal'
import Chairmain from './components/Chairman/Chairmain'
import Fotter from './components/Fotter/Fotter'

const App = () => {
  return (
    <div>
      <Navbar/> <br />
      <Herosection/>
      <InfoCards/>
      <Principal/>
      <Chairmain/>
      <SchoolFeatures/>
      <Fotter/>
    </div>
  )
}

export default App
