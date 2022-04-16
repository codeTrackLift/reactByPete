import React from 'react';
import '../Styles/Welcome.css';
import '../Styles/WelcomeAnimations.css';
import '../Styles/Cards.css';
import '../Styles/WelcomeFooter.css';
import { Row } from 'react-bootstrap';
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


export default function Welcome() {

    const [content, setContent] = React.useState('');
    const injectContent = () => {
        setContent(mainContent);
    }
    setTimeout(injectContent, 2900);

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
                <div id='welcomeCard1' class="card col-sm-4" style={{width: '18rem'}}>
                    <iframe class='container-fluid ratio ratio-1x1 pt-4' src="https://youtube.com/embed/L2MLboXUkUA" frameborder="0" allowfullscreen title='Portfolio intro video'>
                    </iframe>
                    <div class="card-body">
                        <h5 class="card-title" style={{color:'cornflowerblue'}}>See My Work</h5>
                        <p class="card-text">Demo projects and see my progression.</p>
                        <p class="card-text">View source code or my documentation on GitHub.</p>
                        <p class="card-text">Read blog articles about my Coding Bootcamp experience.</p>
                        <div class="btnContainer mt-3">
                            <a href="../pages/projects.html" class="btn btn-secondary">Projects</a>
                            <a href="../pages/blog.html" class="btn btn-secondary btnDark">Blog</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 myArticles container-fluid my-auto">
                    <div class="row justify-content-evenly">
                        <img src={html5_logo} class='col-sm-2 img-fluid img-round' alt="HTML5 Logo." />
                        <img src={css3_logo} class='col-sm-2 img-fluid img-round' alt="CSS3 Logo." />
                        <img src={javascript_logo} class='col-sm-2 img-fluid img-round' alt="JavaScript Logo." />
                    </div>
                    <h1 class="text-center mb-4 menloRegular textShadowBlack">Technology</h1>
                </div>
            </Row>
            
            <Row>
                <div class="col-sm-4 myArticles container-fluid my-auto">
                    <h1 class="text-center mb-4 menloRegular textShadowBlack">Stack</h1>
                    <div class="row justify-content-evenly">
                        <img src={git_logo} class='py-3 col-sm-2 img-fluid img-square' alt="Git Logo." />
                        <img src={vscode_logo} class='py-3 col-sm-2 img-fluid img-square' alt="Visual Studio Code Logo." />
                        <img src={bootstrap_logo} class='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo." />
                        <img src={jest_logo} class='py-3 col-sm-2 img-fluid img-square' alt="Jest Logo." />
                    </div>
                </div>

                <div id='welcomeCard2' class="card col-sm-4" style={{width: '18rem'}}>
                    <img src={crushit_img} class="card-img-top mx-auto" alt="Apple logo with a Crush It sticker" style={{width:'10rem'}} />
                    <div class="card-body">
                        <h5 class="card-title" style={{color:'cornflowerblue'}}>Passionate About Code</h5>
                        <p class="card-text">University Degree in Biological Sciences</p>
                        <p class="card-text">20 year Pharmaceutical Professional</p>
                        <p class="card-text">Full Stack Coding Bootcamp<span style={{color:'gray'}}> (in progress, Jul 2022)</span></p>
                        <div class="btnContainer mt-3">
                            <a href="../pages/about.html" class="btn btn-secondary btnDark">About</a>
                            <a href="../pages/resume.html" class="btn btn-secondary">Resume</a>
                        </div>
                    </div>
                </div>
            </Row>

            <Container fluid>
                <div className="myArticles container-fluid text-center mt-4">
                    <img className='img-fluid bg-black rounded m-auto' src={mern_logo} style={{width:'25rem'}} alt="Mongo DB Express NodeJS ReactJS technology stack." />
                </div>
            </Container>


        </section>
    );
}