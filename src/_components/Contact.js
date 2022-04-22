import React from 'react';
import Footer from './Partials/Footer';
import { Carousel, Container, Row } from 'react-bootstrap';
import '../Styles/App.css';
import '../Styles/Navbar.css';
// import '../Styles/Contact.css';

export const Contact = () => {

    const clearWelcomeActive = () => {
        const welcome = document.getElementById('welcomeNavLink');
        welcome.classList.remove('active');
    }
    setTimeout(clearWelcomeActive, 10)

    return (
        <div><h3>Contact</h3></div>
    )
}
