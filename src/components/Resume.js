import React from 'react';
import Footer from './partials/Footer';
import { Carousel, Container, Row } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/Navbar.css';
// import '../styles/Resume.css';

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
