import React from 'react';
import { StationInLife } from './Partials/StationInLife';
import { WelcomeMain } from './Partials/WelcomeMain';
import '../Styles/Cards.css';
import '../Styles/Welcome.css';
import '../Styles/WelcomeAnimations.css';
import ScrollMagic from 'scrollmagic';

const welcomeStyle = {
    display: 'block',
    margin: '10vh auto',
    paddingTop: '1.5rem',
    textAlign: 'center',
    alignContent: 'center',
    width: 'fit-content',
    height: 'min-content',
    justifyContent: 'center'
}

export const Welcome = () => {

    const [content, setContent] = React.useState('');
    const injectContent = () => {
        setContent(<WelcomeMain />);
    }
    setTimeout(injectContent, 3000);
    setTimeout(initScrollMagic, 3100);
    setTimeout(initCBPLogo, 0);

    const [background, setBackground] = React.useState('');
    const welcomeBackground = () => {
        const newBackground = 'vesselBackground';
        setBackground(newBackground);
    }
    setTimeout(welcomeBackground, 3000);

    return (
        <div id='welcomeBackground' 
            className={background}
            style={{paddingTop: '2.25rem'}}>
            <div id='welcome' 
                className='container-fluid animationBorder'
                style={welcomeStyle}>
                <figure style={{padding:'0 1rem 0 1rem'}}>
                    <h1 className='animationDropDown textShadowBlack'><span className='animationTurnOpaque'>Welcome to</span></h1>
                    <h1 className='animationSlideFromLeft textShadowBlack'><span>code</span><span>By</span><span
                            className='animationExpand'>Pe</span><span className='animationTurnGreen'>te</span></h1>
                </figure>
            </div>

            <StationInLife />

            <main id="mainContent">{content}</main>

       </div>
    )
}

const initCBPLogo = () => {
    var navbarCBPController = new ScrollMagic.Controller();
    var navbarCBP = new ScrollMagic.Scene({
            triggerElement: '#welcome',
            offset: -100,
            duration: 800
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