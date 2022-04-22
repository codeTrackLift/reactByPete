import React from 'react';
import Footer from './Partials/Footer';
import { Carousel, Container, Row } from 'react-bootstrap';
import '../Styles/App.css';
import '../Styles/Navbar.css';
// import '../Styles/Resume.css';

export const Resume = () => {

    const clearWelcomeActive = () => {
        const welcome = document.getElementById('welcomeNavLink');
        welcome.classList.remove('active');
    }
    setTimeout(clearWelcomeActive, 10)

    return (
        <div><h3>Resume</h3></div>
    )
}
