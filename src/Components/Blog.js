import React from 'react';
import ScrollMagic from 'scrollmagic';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MyCodingJourney } from './Partials/Typewriter_mCJ';
import { CarouselRelent } from './Partials/CarouselRelent';
import { Footer } from './Partials/Footer';
import '../Styles/Cards.css';
// import '../Styles/Blog.css';

const mainContentStyle = {

}

export const Blog = () => {
    return (
        <div id="mainContentAbout" style={mainContentStyle}>
            
            <MyCodingJourney />

        </div>
    )
}
