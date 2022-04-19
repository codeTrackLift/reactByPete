import React from 'react';
import ScrollMagic from 'scrollmagic';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MyCodingJourney } from './Partials/Typewriter_mCJ';
import { CarouselRelent } from './Partials/CarouselRelent';
import { Footer } from './Partials/Footer';
import '../Styles/Cards.css';
import mitxPro from '../Images/about/mitxPro_logoStacked.jpg'

const mainContentStyle = {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    textShadow: '0 .05rem .1rem rgba(0, 0, 0, .5)',
    backgroundColor: 'rgb(50, 50, 50)'
}

export const Blog = () => {
    return (
        <div id="mainContentAbout" style={mainContentStyle}>
            
            <MyCodingJourney />

            <div class="container-fluid myArticles">
                <div class="row">
                    <div class="col-3 m-auto">
                        <a href="https://xpro.mit.edu/" target="_blank" rel='noreferrer'><img id='mitLogo'
                                src={mitxPro} class="img-fluid" alt="MIT xPro Logo."/></a>
                    </div>
                    <div class="col-9 m-auto">
                        <h3 class="text-center textShadowBlack textGray">These are reflections of my experience
                            during the MIT xPro
                            Coding Bootcamp.</h3>
                    </div>
                </div>
            </div>

            <CarouselRelent />

            <Footer />

        </div>
    )
}
