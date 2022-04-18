import React from 'react';
import { StationInLife } from './Partials/Typewriter_sIL';
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
    setTimeout(initScrollMagicWelcome, 3100);
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
    const navbarCBPController = new ScrollMagic.Controller();
    const navbarCBP = new ScrollMagic.Scene({
            triggerElement: '#welcome',
            offset: -100,
            duration: 800
        })
        .setClassToggle('#navbarCBP', 'd-none')
        .addTo(navbarCBPController);
}

const initScrollMagicWelcome = () => {
    const welcomeCard1Controller = new ScrollMagic.Controller();
    const welcomeCard1 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard1',
        })
        .setClassToggle('#welcomeCard1', 'shift')
        .addTo(welcomeCard1Controller);

    const welcomeCard2Controller = new ScrollMagic.Controller();
    const welcomeCard2 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard2',
        })
        .setClassToggle('#welcomeCard2', 'shift')
        .addTo(welcomeCard2Controller);

    const githubContributionsController = new ScrollMagic.Controller();
    const githubContributions = new ScrollMagic.Scene({
            triggerElement: '#githubContributions',
            offset: -200
        })
        .setClassToggle('#githubContributions', 'show')
        .addTo(githubContributionsController);

    const buttonContactController = new ScrollMagic.Controller();
    const buttonContact = new ScrollMagic.Scene({
            triggerElement: '#buttonContact',
            offset: -200
        })
        .setClassToggle('#buttonContact', 'show')
        .addTo(buttonContactController);
}