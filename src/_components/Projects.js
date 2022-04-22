import React from 'react';
import Footer from './Partials/Footer';
import { Carousel, Container, Row } from 'react-bootstrap';
import '../Styles/Navbar.css';
import '../Styles/Cards.css';
// import '../Styles/Projects.css';

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
