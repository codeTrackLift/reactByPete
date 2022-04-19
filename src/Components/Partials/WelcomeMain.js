import React from 'react';
// import ScrollMagic from 'scrollmagic';
import { Link } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';
import { CarouselGDPs} from './CarouselGDPs';
import { clearScrollMagic, initScrollMagicWelcome } from './MyScrollmagic';
import { Footer } from './Footer';
import '../../Styles/Cards.css';
import '../../Styles/Welcome.css';
import '../../Styles/WelcomeAnimations.css';
import html5_logo from '../../Images/about/html5_logo.gif';
import css3_logo from '../../Images/about/css3_logo.gif';
import javascript_logo from '../../Images/about/javascript_logo.gif';
import git_logo from '../../Images/about/gitLogoOrangeRed.png'
import vscode_logo from '../../Images/about/vsCodeLogo.png'
import bootstrap_logo from '../../Images/about/bootstrap-logo.svg'
import jest_logo from '../../Images/about/jest_logo.gif'
import crushit_img from '../../Images/about/crushItApple.jpg'
import mern_logo from '../../Images/about/mernStackTrans.png'
import githubContributions from '../../Images/about/githubContributions.png'

const mySectionStyle = {
    width: '100%',
    height: 'fit-content',
    padding: '1rem 0',
    opacity: '1',
    backgroundColor: "rgb(50, 50, 50)",
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
}

const myArticlesStyle = {
    color: 'white',
    borderRadius: '0.25rem',
    backgroundColor: 'transparent'
}

const rowStyle = {
    maxWidth: '1200px',
    margin: '2rem auto',
    gap: '2vw'
}

const cardStyle = {
    margin: '0 auto',
    width: '18rem',
    transition: 'all 1s ease-in-out',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}

const cardBodyPStyle = {
    margin: '5px 0',
    lineHeight: 1.4
}

const imgRoundStyle = {
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
    transition: 'transform 1s ease-in-out',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
}

const imgSquareStyle = {
    backgroundColor: 'transparent',
    height: '6rem',
    width: 'auto',
    boxShadow: 'none',
    transition: 'transform 1s ease-in-out',
    WebkitFilter: 'drop-shadow(1px 1px 1px black)',
    filter: 'drop-shadow(1px 1px 1px black)'
}

export const WelcomeMain = () => {

    setTimeout(clearScrollMagic, 0);
    setTimeout(initScrollMagicWelcome, 0);

    return (
        <section id="mySection" style={mySectionStyle}>
           
            <Row className='text-center' style={rowStyle}>
            <h5 className='menloRegular textShadowBlack textSilver'><span className='text-white'>Join me</span>, on <a href="../pages/blog.html">myCodingJourney</a>...</h5>
            </Row>
            
            <Row style={rowStyle}>

                        <div id='welcomeCard1' className="card col-sm-4" style={cardStyle}>
                            <iframe className='container-fluid ratio ratio-1x1 pt-4' src="https://youtube.com/embed/L2MLboXUkUA" frameBorder="0" allowFullScreen title='Portfolio intro video'>
                            </iframe>
                            <div className="card-body">
                                <h5 className="card-title" style={{color:'cornflowerblue'}}>See My Work</h5>
                                <p className="card-text"  style={cardBodyPStyle}>Demo projects and see my progression.</p>
                                <p className="card-text"  style={cardBodyPStyle}>View source code or my documentation on GitHub.</p>
                                <p className="card-text"  style={cardBodyPStyle}>Read blog articles about my Coding Bootcamp experience.</p>
                                <div className="btnContainer mt-3">
                                    <Link to='/Projects'>
                                        <Button className='btnDark' variant='secondary'>
                                            Projects
                                        </Button>
                                    </Link>
                                    <Link to='/Blog'>
                                        <Button variant='secondary'>
                                            Blog
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                <div className="col-sm-4 myArticlesWelcome container-fluid my-auto" style={myArticlesStyle}>
                    <div className="row justify-content-evenly my-5">
                        <img src={html5_logo} className='col-sm-2 img-fluid img-round' alt="HTML5 Logo." style={imgRoundStyle} />
                        <img src={css3_logo} className='col-sm-2 img-fluid img-round' alt="CSS3 Logo." style={imgRoundStyle} />
                        <img src={javascript_logo} className='col-sm-2 img-fluid img-round' alt="JavaScript Logo." style={imgRoundStyle} />
                    </div>
                    <h1 className="text-center mb-4 menloRegular textShadowBlack">Technology</h1>
                </div>
            </Row>
            
            <Row style={rowStyle}>
                <div className="col-sm-4 myArticlesWelcome container-fluid my-auto" style={myArticlesStyle}>
                    <h1 className="text-center mb-4 menloRegular textShadowBlack">Stack</h1>
                    <div className="row justify-content-evenly my-5">
                        <img src={git_logo} className='py-3 col-sm-2 img-fluid img-square' style={imgSquareStyle} alt="Git Logo." />
                        <img src={vscode_logo} className='py-3 col-sm-2 img-fluid img-square' style={imgSquareStyle} alt="Visual Studio Code Logo." />
                        <img src={bootstrap_logo} className='py-3 col-sm-2 img-fluid img-square' style={imgSquareStyle} alt="Bootstrap Logo." />
                        <img src={jest_logo} className='py-3 col-sm-2 img-fluid img-square' style={imgSquareStyle} alt="Jest Logo." />
                    </div>
                </div>

                <div id='welcomeCard2' className="card col-sm-4" style={cardStyle}>
                    <img src={crushit_img} className="card-img-top mx-auto" alt="Apple logo with a Crush It sticker" style={{width:'10rem',marginTop:'1rem'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'cornflowerblue'}}>Passionate About Code</h5>
                        <p className="card-text"  style={cardBodyPStyle}>University Degree in Biological Sciences</p>
                        <p className="card-text"  style={cardBodyPStyle}>20 year Pharmaceutical Professional</p>
                        <p className="card-text"  style={cardBodyPStyle}>Full Stack Coding Bootcamp<span style={{color:'gray'}}> (in progress, Jul 2022)</span></p>
                        <div className="btnContainer mt-3">
                            <Link to='/About'>
                                <Button className='btnDark' variant='secondary'>
                                    About
                                </Button>
                            </Link>
                            <Link to='/Resume'>
                                <Button variant='secondary'>
                                    Resume
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Row>

            <Container fluid>
                <div className="myArticlesWelcome container-fluid text-center mt-5" style={myArticlesStyle}>
                    <img className='img-fluid bg-black rounded m-auto py-2 px-1' src={mern_logo} style={{width:'25rem'}} alt="Mongo DB Express NodeJS ReactJS technology stack." />
                </div>
            </Container>

            <Container fluid id='bottomNav' className='mt-5'>
                <h5 className="menloRegular textSilver textShadowBlack text-center mx-auto" style={{maxWidth:'860px'}}>Let me know you visited...</h5>
                <div className="container-fluid text-center mt-4" style={{maxWidth:'480px'}}>
                    <Link to='/Contact'>
                        <Button id='buttonContact' className='btnDark' variant='secondary'>
                            Contact
                        </Button>
                    </Link>
                </div>
            </Container>

            <Container fluid id='githubContributions' className="text-center">
                <a href="https://github.com/codeTrackLift" target="_blank" rel='noreferrer'>
                    <img src={githubContributions} alt="GitHub contribution" />
                </a>
            </Container>

            <CarouselGDPs />

            <Footer />

        </section>
    );
}

// const initScrollMagicWelcome = () => {
//     var welcomeCard1Controller = new ScrollMagic.Controller();
//     var welcomeCard1 = new ScrollMagic.Scene({
//             triggerElement: '#welcomeCard1',
//         })
//         .setClassToggle('#welcomeCard1', 'shift')
//         .addTo(welcomeCard1Controller);

//     var welcomeCard2Controller = new ScrollMagic.Controller();
//     var welcomeCard2 = new ScrollMagic.Scene({
//             triggerElement: '#welcomeCard2',
//         })
//         .setClassToggle('#welcomeCard2', 'shift')
//         .addTo(welcomeCard2Controller);

//     var githubContributionsController = new ScrollMagic.Controller();
//     var githubContributions = new ScrollMagic.Scene({
//             triggerElement: '#githubContributions',
//             offset: -200
//         })
//         .setClassToggle('#githubContributions', 'show')
//         .addTo(githubContributionsController);

//     var buttonContactController = new ScrollMagic.Controller();
//     var buttonContact = new ScrollMagic.Scene({
//             triggerElement: '#buttonContact',
//             offset: -200
//         })
//         .setClassToggle('#buttonContact', 'show')
//         .addTo(buttonContactController);
// }

// const clearScrollMagicWelcome = () => {
//     var welcomeCard1Controller = null;
//     var welcomeCard1 = null;
//     var welcomeCard2Controller = null;
//     var welcomeCard2 = null;
//     var githubContributionsController = null;
//     var githubContributions = null;
//     var buttonContactController = null;
//     var buttonContact = null;
// }