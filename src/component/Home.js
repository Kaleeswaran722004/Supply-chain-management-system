// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About from './About';

import aimg from '../component/agri.webp';
// export const Home = () => {
const Home = () => {
  return (
    <div className='hom1'>
      <img src={aimg}/>
      <h1>Welcome to the Supply Chain Management System</h1>
      
      <h1>Introduction</h1>
      <p>A supply chain management system is a set of processes and technologies used by businesses to manage the flow of goods, services, and information from the initial raw materials stage through production to the final delivery to customers. It involves coordinating and optimizing activities such as procurement, manufacturing, inventory management, logistics, and distribution to ensure efficiency, cost-effectiveness, and customer satisfaction. Effective supply chain management can lead to reduced costs, improved customer service, increased competitiveness, and better decision-making through data-driven insights.</p>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
  }

export default Home;
