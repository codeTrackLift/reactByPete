import React from 'react';
import { NavLink } from 'react-router-dom';
import { clearScrollMagic, initScrollMagicAbout } from './Helpers/MyScrollmagic';
import { Button, Nav } from 'react-bootstrap';
import { initCBPLogoDiv } from './Helpers/cBPLogo';
import { CodeTrackLift } from './Partials/Typewriter_cTL';
import { CarouselRelent } from './Partials/CarouselRelent';
import { Footer } from './Partials/Footer';
import '../Styles/About.css';
import '../Styles/Cards.css';
import profilepic from '../Images/about/profilepic.gif';
import crushItApple from '../Images/about/crushItApple.jpg';
import githubContributions_100Days from '../Images/about/githubContributions_100Days.jpg';
import issa_logo from '../Images/about/issa_logo.gif';
import peteSwitch from '../Images/about/peteSwitch.jpg';
import peteLaFitness from '../Images/about/peteLaFitness.jpg';
import peteSnowboardingMountain from '../Images/about/peteSnowboardingMountain.jpg';
import peteSTi from '../Images/about/peteSTi.jpg';
import peteTheForce from '../Images/about/peteTheForce.png';

const mainContentStyle = {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
    alignItems: 'center'
}

const githubContributions100Style = {
    zIndex: 1,
    opacity: 1 + ' !important',
    transform: 'scale(1.05)'
}

const myArticlesStyle = {
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
    backgroundColor: 'black',
    width: '90vw',
    maxWidth: '960px',
    lineHeight: 1.6,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
}

const imageSquareStyle = {
    borderRadius: '1.125rem',
    backgroundColor: 'transparent',
    height: '10rem',
    width: 'auto'
}

const imageRectStyle = {
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    height: 'auto',
    width: '10rem'
}

export const About = () => {

    setTimeout(clearScrollMagic, 0);
    setTimeout(initScrollMagicAbout, 0);

    const clearWelcomeActive = () => {
        const welcome = document.getElementById('welcomeNavLink');
        welcome.classList.remove('active');
    }
    setTimeout(clearWelcomeActive, 10);

    const navbarCBP = () => {
        const navbarCBPLogo = document.getElementById('navbarCBP');
        navbarCBPLogo.classList.remove('d-none');
    }
    setTimeout(navbarCBP, 10);

    return (
        <div id="mainContentAbout" style={mainContentStyle}>

            <CodeTrackLift />

            <div id="greetingByPete">
                <img src={profilepic} className='img-fluid bg-transparent' alt="Pete's wearing a suit."/>
            </div>

            <div id="myIntro" className="myArticles container-fluid mt-5" style={myArticlesStyle}>
                <h2>Hello,</h2>
                <p className='textSilver'>My name is <span className="menloRegular" style={{color:'chocolate'}}>Pete</span> and I <span className='text-white'>grew up in the
                        90s</span>. I fondly remember multi-sided die, Bulletin Board Systems, Sierra games, and AOL CDs.
                </p>
                <p className='textSilver'>'Medicine is my destiny,' or so I was told. I have a <span className='text-white'>Bachelor's Degree</span> in <span className='text-white'>Biological
                        Sciences</span>, and my <a href="../pages/resume.html" target="_blank" rel='noreferrer'
                        className="menloRegular">stationInLife</a> was in the <span className='text-white'>Pharmaceutical Engineering</span> space for
                    two decades.</p>
                <p className='textSilver'>At the mid-point of my career, I enrolled in a <span className='text-white'>Full Stack Coding Bootcamp</span> to pursue my
                    <span className='text-white'> childhood dream</span> of being a <span className="menloRegular" style={{color:'darkorchid'}}>Software
                        Developer</span>.</p>
                <p className='textSilver'>Please join me, on <a href="../pages/blog.html" target="_blank" rel='noreferrer' className="menloRegular">myCodingJourney</a>.
                </p>
                <div className="row">
                    <img id='crushItApple' className='col-sm-1 img-fluid' src={crushItApple} alt="Core Nutritionals sticker on a glowing Apple logo." style={imageRectStyle}/>
                    <p className="textSilver col-sm-11 text-end">Best Regards,<br/>Pete Chu, BA</p>
                </div>
            </div>

            <div id='githubContributions' className="container-fluid text-center" style={githubContributions100Style}>
                <a href="https://github.com/codeTrackLift" target="_blank" rel='noreferrer'>
                    <img src={githubContributions_100Days} alt="GitHub contribution"/>
                </a>
            </div>

            <div id="personal" className="myArticles container-fluid"  style={myArticlesStyle}>
                <h1 className="text-center mb-4">Personal Stuff</h1>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <a href="https://www.issaonline.com/" target="_blank" rel='noreferrer'>
                            <img src={issa_logo} className='img-fluid rounded-circle my-auto' alt="International Sports Sciences Association Logo"/>
                        </a>
                    </div>
                    <img src={peteSwitch} className='col-sm-4 img-fluid my-auto px-0' alt="Pete selfie with a shiba inu named Switch." style={imageRectStyle}/>
                    <img src={peteLaFitness} className='col-sm-4 img-fluid bg-transparent px-0' alt="Pete gym selfie." style={imageRectStyle}/>
                </div>
                <div className='row'>
                    <p className="col-sm-4 mt-4"><span style={{color:'darkorchid'}}>Fitness {'&'} nutrition</span> are my other life passions. I am also a certified personal trainer (hobby).</p>
                    <p className="col-sm-7"><span style={{color:'chocolate'}}>Dogs {'>'} cats</span>, but I like any animal that does
                        not try to eat me. In my spare time, I pick up heavy things and put them back down. Some call it
                        <span className='text-white'> 'resistance training</span>.<span className='text-white'>'</span></p>
                </div>
                <div className="row">
                    <img src={peteSnowboardingMountain} className='col-sm-4 img-fluid py-3 my-auto' alt="Pete snowboarding."  style={imageSquareStyle}/>
                    <img src={peteSTi} className='col-sm-4 img-fluid py-3 my-auto' alt="2005 Subaru WRX STi on the track." style={imageSquareStyle} />
                    <img src={peteTheForce} className='col-sm-4 img-fluid py-3 my-auto'
                        alt="Annie is a sith lord!"  style={imageSquareStyle}/>
                </div>
                <div className="row">
                    <p className="col-sm-7">I have slid down <span className='text-white'>mountains</span> strapped to a waxy plank, and <span style={{color:'chocolate'}}>driven</span> in circles as fast as I can.</p>
                    <p className="col-sm-4">I may have also married a <a href="https://en.wikipedia.org/wiki/Sith" target="_blank" rel='noreferrer'> Sith</a> Lord!<br/>
                        <span style={{color:'darkorchid'}}>'This is the way</span>.
                        <span style={{color:'darkorchid'}}>'</span>
                    </p>
                </div>
            </div>

            <div id='bottomNav' className="container-fluid">
                <h5 className="menloRegular textSilver textShadowBlack text-center mx-auto" style={{maxWidth: '640px'}}><span
                        className="text-white">Need help with a project?</span> Read blog articles about my Coding Bootcamp
                    experience.</h5>
                <div className="btnContainer container-fluid text-center mt-4 d-flex justify-content-evenly" style={{maxWidth:'480px'}}>
                    <Nav.Link to='/reactByPete/contact' href='/reactByPete/contact' as={NavLink}>
                        <Button id='buttonContact' className='btnDark' variant='secondary'>
                            Contact
                        </Button>
                    </Nav.Link>
                    <Nav.Link to='/reactByPete/blog' href='/reactByPete/blog' as={NavLink}>
                        <Button id='buttonBlog' variant='secondary'>
                            Blog
                        </Button>
                    </Nav.Link>
                </div>
            </div>

            <CarouselRelent />

            <Footer />

        </div>
    )
}