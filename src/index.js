import React from 'react';
import ReactDOM from 'react-dom/client';
//import Home from './Classcom/Home';
import About from './Classcom/About';
import Contact from './Classcom/Contact';
//import FunHome from './functional/FunHome';
import FunAbout from './functional/FunAbout';
import FunContact from './functional/FunContact';
import 'bootstrap/dist/css/bootstrap.min.css';



const root =ReactDOM.createRoot(document.getElementById('root'));
root.render
(
<div>
    <About/>
    <Contact/>
    <FunAbout/>
    <FunContact/>
</div>

);
