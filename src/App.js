import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Work from './pages/Work'
import Blog from './pages/Blog'
import AboutUs from './pages/About_us'
import Service from './pages/Service'
import NoPage from './pages/NoPage'
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route index element = {<Home />}/>
          <Route path='blogs' element = {<Blog />}/>
          <Route path='contact' element = {<Contact />}/>
          <Route path='about' element = {<AboutUs />}/>
          <Route path='pricing' element = {<Pricing />}/>
          <Route path='service' element = {<Service />}/>
          <Route path='work' element = {<Work />}/>
          <Route path='*' element = {<NoPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
