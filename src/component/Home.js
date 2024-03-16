// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About from './About'
const Home = () => {
  return (
    <div className='hom1'>
      <h1>Welcome to the Supply Chain Management System</h1>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
  }

export default Home;
