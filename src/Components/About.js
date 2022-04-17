import React from 'react';
import Footer from './Footer';
// import '../Styles/About.css';
import '../Styles/Cards.css';
import '../Styles/Typewriter_cTL.css';
import profilepic from '../Images/about/profilepic.gif';
import crushItApple from '../Images/about/crushItApple.jpg';
import githubContributions_100Days from '../Images/about/githubContributions_100Days.jpg';
import issa_logo from '../Images/about/issa_logo.gif';
import peteSwitch from '../Images/about/peteSwitch.jpg';
import peteLaFitness from '../Images/about/peteLaFitness.jpg';
import peteSnowboardingMountain from '../Images/about/peteSnowboardingMountain.jpg';
import peteSTi from '../Images/about/peteSTi.jpg';
import peteTheForce from '../Images/about/peteTheForce.png';

export const About = () => {

    return (
        <div id="mainContent">

            <section id="typeWriterSection_cTL">
                <figure id='typeWriter' className="mx-auto">
                    <h2 id="typeWriter1"><span style={{color:'darkorchid'}}>while</span> (<span
                            style={{color:'cornflowerblue'}}>alive</span>) {'{'}</h2>
                    <h2 id="typeWriter2"><span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span><span
                            style={{color:'chocolate'}}>code</span>()<span style={{color:'gray'}}>;</span></h2>
                    <h2 id="typeWriter3"><span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span><span
                            style={{color:'chocolate'}}>track</span>(<span style={{color:'cornflowerblue'}}>macros</span>)<span
                            style={{color:'gray'}}>;</span></h2>
                    <h2 id="typeWriter4"><span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span><span
                            style={{color:'chocolate'}}>lift</span>(<span style={{color:'cornflowerblue'}}>weights</span>)<span
                            style={{color:'gray'}}>;</span></h2>
                    <h2 id="typeWriter5">{'}'}</h2>
                </figure>
            </section>

            <div id="greetingPic">
                <img src={profilepic} className='img-fluid bg-transparent' alt="Pete's wearing a suit."/>
            </div>

            <div id="myIntro" className="myArticles container-fluid mt-5">
                <h2>Hello,</h2>
                <p>My name is <span className="menloRegular" style={{color:'chocolate'}}>Pete</span> and I <span>grew up in the
                        90s</span>. I fondly remember multi-sided die, Bulletin Board Systems, Sierra games, and AOL CDs.
                </p>
                <p>'Medicine is my destiny,' or so I was told. I have a <span>Bachelor's Degree</span> in <span>Biological
                        Sciences</span>, and my <a href="../pages/resume.html" target="_blank" rel='noreferrer'
                        className="menloRegular">stationInLife</a> was in the <span>Pharmaceutical Engineering</span> space for
                    two decades.</p>
                <p>At the mid-point of my career, I enrolled in a <span>Full Stack Coding Bootcamp</span> to pursue my
                    <span>childhood dream</span> of being a <span className="menloRegular" style={{color:'darkorchid'}}>Software
                        Developer</span>.</p>
                <p>Please join me, on <a href="../pages/blog.html" target="_blank" rel='noreferrer' className="menloRegular">myCodingJourney</a>.
                </p>
                <div className="row">
                    <img id='crushItApple' className='col-sm-1 img-rect img-fluid' src={crushItApple} alt="Core Nutritionals sticker on a glowing Apple logo."/>
                    <p className="col-sm-11 text-end">Best Regards,<br/>Pete Chu, BA</p>
                </div>
            </div>

            <div id='githubContributions' className="container-fluid text-center">
                <a href="https://github.com/codeTrackLift" target="_blank" rel='noreferrer'>
                    <img src={githubContributions_100Days} alt="GitHub contribution"/>
                </a>
            </div>

            <div id="personal" className="myArticles container-fluid">
                <h1 className="text-center mb-4">Personal Stuff</h1>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <a href="https://www.issaonline.com/" target="_blank" rel='noreferrer'>
                            <img src={issa_logo} className='img-fluid img-round my-auto' alt="International Sports Sciences Association Logo"/>
                        </a>
                    </div>
                    <img src={peteSwitch} className='col-sm-4 img-fluid img-rect my-auto px-0' alt="Pete selfie with a shiba inu named Switch."/>
                    <img src={peteLaFitness} className='col-sm-4 img-fluid img-rect bg-transparent px-0' alt="Pete gym selfie."/>
                </div>
                <div className='row'>
                    <p className="col-sm-4"><span style={{color:'darkorchid'}}>Fitness {'&'} nutrition</span> are my other life passions. I am also a certified personal trainer (hobby).</p>
                    <p className="col-sm-7"><span style={{color:'chocolate'}}>Dogs {'>'} cats</span>, but I like any animal that does
                        not try to eat me. In my spare time, I pick up heavy things and put them back down. Some call it
                        <span>'resistance training</span>.<span>'</span></p>
                </div>
                <div className="row">
                    <img src={peteSnowboardingMountain} className='img-square col-sm-4 img-fluid py-3 my-auto' alt="Pete snowboarding." />
                    <img src={peteSTi} className='img-square col-sm-4 img-fluid py-3 my-auto' alt="2005 Subaru WRX STi on the track." />
                    <img src={peteTheForce} className='img-square col-sm-4 img-fluid py-3 my-auto'
                        alt="Annie is a sith lord!" />
                </div>
                <div className="row">
                    <p className="col-sm-7">I have slid down <span>mountains</span> strapped to a waxy plank, and <span style={{color:'chocolate'}}>driven</span> in circles as fast as I can.</p>
                    <p className="col-sm-4">I may have also married a 
                        <a href="https://en.wikipedia.org/wiki/Sith" target="_blank" rel='noreferrer'>Sith</a> Lord!<br/>
                        <span style={{color:'darkorchid'}}>'This is the way</span>.
                        <span style={{color:'darkorchid'}}>'</span>
                    </p>
                </div>
            </div>

            <div id='bottomNav' className="container-fluid">
                <h5 className="menloRegular text-silver textShadowBlack text-center mx-auto" style={{maxWidth: '640px'}}><span
                        className="text-white">Need help with a project?</span> Read blog articles about my Coding Bootcamp
                    experience.</h5>
                <div className="btnContainer container-fluid text-center mt-4 d-flex justify-content-evenly">
                    <a id='buttonContact' href="../pages/contact.html" className="btn btn-secondary btnDark">Contact Me</a>
                    <a id='buttonBlog' href="../pages/blog.html" className="btn btn-secondary">My Blog</a>
                </div>
            </div>

            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"If something is truly
                            important to you, pursue it relentlessly."</h3>
                        <figcaption className="blockquote-footer text-end mt-3 mx-5">
                            <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span
                                    style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                        </figcaption>
                    </div>
                    <div className="carousel-item">
                        <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"I'm a fast learner, if I had
                            a 'super-power' it would be the ability to focus."</h3>
                        <figcaption className="blockquote-footer text-end mt-3 mx-5">
                            <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span
                                    style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                        </figcaption>
                    </div>
                    <div className="carousel-item">
                        <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"A frustrating experience can
                            be reframed into a progression opportunity."</h3>
                        <figcaption className="blockquote-footer text-end mt-3 mx-5">
                            <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span
                                    style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                        </figcaption>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
