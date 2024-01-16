import React from 'react'
import Header from '../components/Header';
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Testimonials from './Testimonials'
import {Route, Routes } from 'react-router-dom';
import Home from './Home';

const DashBoard = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/testimonial' element={<Testimonials/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default DashBoard;