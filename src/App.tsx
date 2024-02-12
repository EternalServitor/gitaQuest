import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "@/components/Navbar"
import Landing from "@/components/Landing"
import Donation from "@/components/Donation"
import Testimony from "@/components/Testimony"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Donation />
      <Testimony />
      <CTA />
      {/* <Footer /> */}
    </>
  )
}

export default App
