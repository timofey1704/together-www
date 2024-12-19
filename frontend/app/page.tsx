import React from 'react'
import Intro from './components/LandingPage/Intro'
import Description from './components/LandingPage/Description'
import Value from './components/LandingPage/Value'
import LandingForm from './components/LandingPage/LandingForm'
import Patners from './components/LandingPage/Patners'

export default function Home() {
  return (
    <>
      <Intro />
      <Description />
      <Value />
      <LandingForm />
      <Patners />
    </>
  )
}
