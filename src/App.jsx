import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomeLayout from './HomeLayout'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ContactUs from './component/ContactUs';
import Apply from './component/Apply';
import Help from './component/Help';
import About from './component/About';


function App() {


  return (
    
    <Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ContactUsInternship" element={<ContactUs
        heading="For internship quieries"
        content="Thank you for showing interest. Please feel free to reach out to us.For easy communication fill the given form.Connect with us on Social Media Platforms to stay updated on internship opportunities and company news. Feel free to send us a direct message with any questions you may have."/>}/>
        <Route path="/ContactUsJobs" element={<ContactUs
         heading="For job quieries" 
         content="Looking for job opportunities or need assistance in finding the right career path? Our team is here to help! Whether you're a recent graduate, seasoned professional, or someone exploring new career options, we provide personalized support to match you with suitable job opportunities." 
         />}/>
         <Route path="/ContactUsPlacement" element={<ContactUs
         heading="For placement related quieries" 
         content="Looking to kick-start your career or transition to a new role? Our placement assistance services are designed to connect you with exciting job opportunities tailored to your skills and aspirations." 
         />}/>
         <Route path="/ContactUsTraining" element={<ContactUs
         heading="For taining related quieries" 
         content="Interested in upgrading your skills or pursuing professional development opportunities? Our training query assistance services are designed to help you find the right training programs to meet your learning needs." 
         />}/>
         <Route path="/ContactUsFreelancing" element={<ContactUs
         heading="For freelance related quieries" 
         content="Interested in freelancing opportunities or seeking guidance on starting your freelance career? Our team provides comprehensive support and resources to help you thrive as a freelancer." 
         />}/>
         <Route path="/tcs" element={<Apply 
         value="Tata Consultancy and service"/>}/>
     

      <Route path="/capgemini" element={<Apply 
         value="Capgemini"/>}/>

<Route path="/ola" element={<Apply 
         value="Ola"/>}/>

<Route path="/hcl" element={<Apply 
         value="Hcl tech"/>}/>

<Route path="/accenture" element={<Apply 
         value="Accenture"/>}/>

<Route path="/zomato" element={<Apply 
         value="Zomato"/>}/>

<Route path="/swiggy" element={<Apply 
         value="Swiggy"/>}/>

<Route path="/wipro" element={<Apply 
         value="Wipro"/>}/>

<Route path="/blinkit" element={<Apply 
         value="Blinkit"/>}/>
      </Routes>


      <Footer/>
      </div>
      </Router>
    
  )
}

export default App
