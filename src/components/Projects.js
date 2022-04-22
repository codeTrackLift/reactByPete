import React from 'react';
import Footer from './partials/Footer';
import { Carousel, Container, Row } from 'react-bootstrap';
import '../styles/Navbar.css';
import '../styles/Cards.css';
// import '../styles/Projects.css';

export const Projects = () => {

    const clearWelcomeActive = () => {
        const welcome = document.getElementById('welcomeNavLink');
        welcome.classList.remove('active');
    }
    setTimeout(clearWelcomeActive, 10)

    return (
        <div><h3>Projects</h3></div>
    )
}
