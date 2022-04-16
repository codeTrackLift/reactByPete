import React from 'react';
import '../Styles/Welcome.css';
import '../Styles/WelcomeAnimations.css';
import '../Styles/Cards.css';
import '../Styles/WelcomeFooter.css';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import html5_logo from '../Images/about/html5_logo.gif';
import css3_logo from '../Images/about/css3_logo.gif';
import javascript_logo from '../Images/about/javascript_logo.gif';
import git_logo from '../Images/about/gitLogoOrangeRed.png'
import vscode_logo from '../Images/about/vsCodeLogo.png'
import bootstrap_logo from '../Images/about/bootstrap-logo.svg'
import jest_logo from '../Images/about/jest_logo.gif'
import crushit_img from '../Images/about/crushItApple.jpg'
import mern_logo from '../Images/about/mernStackTrans.png'
import githubContributions from '../Images/about/githubContributions.png'
import ScrollMagic from 'scrollmagic';

export default function Welcome() {

    const [content, setContent] = React.useState('');
    const injectContent = () => {
        setContent(mainContent);
    }
    setTimeout(injectContent, 2900);
    setTimeout(initScrollMagic, 3000);
    // setTimeout(initCBPLogo, 3000);


    return (
       <div>
           <div id='welcome' className='container-fluid animationBorder'>
                <figure className=''>
                    <h1 className='animationDropDown textShadowBlack'><span className='animationTurnOpaque'>Welcome to</span></h1>
                    <h1 className='animationSlideFromLeft textShadowBlack'><span>code</span><span>By</span><span
                            className='animationExpand'>Pe</span><span className='animationTurnGreen'>te</span></h1>
                </figure>
            </div>

            <section id="typeWriterSection">
                <figure id='typeWriter' className="mx-auto">
                    <h2 id="typeWriter1">
                        <span style={{color: 'cornflowerblue'}}>stationInLife</span>
                        <span style={{color:'gray'}}>.</span>
                        <span style={{color:'darkorchid'}}>replace</span>(
                    </h2>
                    <h2 id="typeWriter2">
                        <span style={{color:'black',textShadow:'none'}}>__</span>'
                        <span style={{color: '#00857c'}}>Pharmaceutical Engineer</span>'
                        <span style={{color:'gray'}}>,</span>
                    </h2>
                    <h2 id="typeWriter3">
                        <span style={{color:'black',textShadow:'none'}}>__</span>'
                        <span style={{color:'lime'}}>Software Developer</span>')
                        <span style={{color:'gray'}}>;</span>
                    </h2>
                </figure>
            </section>

            <main id="mainContent">{content}</main>

       </div>
    )
}

const mainContent = () => {
    return (
        <section id="mySection">
           
            <Row className='text-center'>
            <h5 className='menloRegular textShadowBlack textSilver'><span className='text-white'>Join me</span>, on <a href="../pages/blog.html">myCodingJourney</a>...</h5>
            </Row>

            <Row>
                <div id='welcomeCard1' className="card col-sm-4" style={{width: '18rem'}}>
                    <iframe className='container-fluid ratio ratio-1x1 pt-4' src="https://youtube.com/embed/L2MLboXUkUA" frameBorder="0" allowFullScreen title='Portfolio intro video'>
                    </iframe>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'cornflowerblue'}}>See My Work</h5>
                        <p className="card-text">Demo projects and see my progression.</p>
                        <p className="card-text">View source code or my documentation on GitHub.</p>
                        <p className="card-text">Read blog articles about my Coding Bootcamp experience.</p>
                        <div className="btnContainer mt-3">
                            <a href="../pages/projects.html" className="btn btn-secondary">Projects</a>
                            <a href="../pages/blog.html" className="btn btn-secondary btnDark">Blog</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 myArticles container-fluid my-auto">
                    <div className="row justify-content-evenly">
                        <img src={html5_logo} className='col-sm-2 img-fluid img-round' alt="HTML5 Logo." />
                        <img src={css3_logo} className='col-sm-2 img-fluid img-round' alt="CSS3 Logo." />
                        <img src={javascript_logo} className='col-sm-2 img-fluid img-round' alt="JavaScript Logo." />
                    </div>
                    <h1 className="text-center mb-4 menloRegular textShadowBlack">Technology</h1>
                </div>
            </Row>
            
            <Row>
                <div className="col-sm-4 myArticles container-fluid my-auto">
                    <h1 className="text-center mb-4 menloRegular textShadowBlack">Stack</h1>
                    <div className="row justify-content-evenly">
                        <img src={git_logo} className='py-3 col-sm-2 img-fluid img-square' alt="Git Logo." />
                        <img src={vscode_logo} className='py-3 col-sm-2 img-fluid img-square' alt="Visual Studio Code Logo." />
                        <img src={bootstrap_logo} className='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo." />
                        <img src={jest_logo} className='py-3 col-sm-2 img-fluid img-square' alt="Jest Logo." />
                    </div>
                </div>

                <div id='welcomeCard2' className="card col-sm-4" style={{width: '18rem'}}>
                    <img src={crushit_img} className="card-img-top mx-auto" alt="Apple logo with a Crush It sticker" style={{width:'10rem'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'cornflowerblue'}}>Passionate About Code</h5>
                        <p className="card-text">University Degree in Biological Sciences</p>
                        <p className="card-text">20 year Pharmaceutical Professional</p>
                        <p className="card-text">Full Stack Coding Bootcamp<span style={{color:'gray'}}> (in progress, Jul 2022)</span></p>
                        <div className="btnContainer mt-3">
                            <a href="../pages/about.html" className="btn btn-secondary btnDark">About</a>
                            <a href="../pages/resume.html" className="btn btn-secondary">Resume</a>
                        </div>
                    </div>
                </div>
            </Row>

            <Container fluid>
                <div className="myArticles container-fluid text-center mt-4">
                    <img className='img-fluid bg-black rounded m-auto' src={mern_logo} style={{width:'25rem'}} alt="Mongo DB Express NodeJS ReactJS technology stack." />
                </div>
            </Container>

            <Container fluid id='bottomNav' className='mt-5'>
                <h5 className="menloRegular textSilver textShadowBlack text-center mx-auto" style={{maxWidth:'860px'}}>Let me know you visited...</h5>
                <div className="container-fluid text-center mt-4" style={{maxWidth:'480px'}}>
                    <a id='buttonContact' href="../pages/contact.html" className="btn btn-secondary btnDark">Contact Me</a>
                </div>
            </Container>

            <Container fluid id='githubContributions' className="text-center">
                <a href="https://github.com/codeTrackLift" target="_blank" rel='noreferrer'>
                    <img src={githubContributions} alt="GitHub contribution" />
                </a>
            </Container>

            <Carousel id="carousel" className="carousel slide" data-bs-ride="carousel" controls={false} indicators={false}>
                <Carousel.Item className="">
                    <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"Pharmaceutical experience
                        drives my Good Documentation Practices (GDPs)."</h3>
                    <figcaption className="blockquote-footer text-end mt-3 mx-5">
                        <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                    </figcaption>
                </Carousel.Item>
                <Carousel.Item className="">
                    <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"Front-load effort, spend time
                        to understand the problem before proposing a solution."</h3>
                    <figcaption className="blockquote-footer text-end mt-3 mx-5">
                        <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                    </figcaption>
                </Carousel.Item>
                <Carousel.Item className="">
                    <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"Successful projects are
                        planned before implementation, and tested before release."</h3>
                    <figcaption className="blockquote-footer text-end mt-3 mx-5">
                        <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                    </figcaption>
                </Carousel.Item>
            </Carousel>

        </section>
    );
}

const initCBPLogo = () => {
    var navbarCBPController = new ScrollMagic.Controller();
    var navbarCBP = new ScrollMagic.Scene({
            triggerElement: '#welcome',
            offset: 0,
            duration: 600
        })
        .setClassToggle('#navbarCBP', 'd-none')
        .addTo(navbarCBPController);
}

const initScrollMagic = () => {
    var welcomeCard1Controller = new ScrollMagic.Controller();
    var welcomeCard1 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard1',
        })
        .setClassToggle('#welcomeCard1', 'shift')
        .addTo(welcomeCard1Controller);

    var welcomeCard2Controller = new ScrollMagic.Controller();
    var welcomeCard2 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard2',
        })
        .setClassToggle('#welcomeCard2', 'shift')
        .addTo(welcomeCard2Controller);

    var githubContributionsController = new ScrollMagic.Controller();
    var githubContributions = new ScrollMagic.Scene({
            triggerElement: '#githubContributions',
            offset: -200
        })
        .setClassToggle('#githubContributions', 'show')
        .addTo(githubContributionsController);

    var buttonContactController = new ScrollMagic.Controller();
    var buttonContact = new ScrollMagic.Scene({
            triggerElement: '#buttonContact',
            offset: -200
        })
        .setClassToggle('#buttonContact', 'show')
        .addTo(buttonContactController);
}