import React from 'react';
import { initCBPLogoWelcome } from './helpers/cBPLogo';
import { StationInLife } from './partials/Typewriter_sIL';
import { WelcomeMain } from './partials/WelcomeMain';
import '../styles/Cards.css';
import '../styles/Welcome.css';
import '../styles/WelcomeAnimations.css';

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
    const [background, setBackground] = React.useState('');

    setTimeout(initCBPLogoWelcome, 0);
    
    const welcomeBackground = () => {
        const newBackground = 'vesselBackground';
        setBackground(newBackground);
    }
    setTimeout(welcomeBackground, 3000);
    
    const injectContent = () => {
        setContent(<WelcomeMain />);
    }
    setTimeout(injectContent, 3000);


    const addWelcomeActive = () => {
        const welcome = document.getElementById('welcomeNavLink');
        welcome.classList.add('active');
    }
    setTimeout(addWelcomeActive, 10)

    return (
        <div id='welcomeBackground' 
            className={background}
            style={{paddingTop: '2.25rem'}}>
            <div id='welcome' 
                className='container-fluid animationBorder'
                style={welcomeStyle}>
                <figure style={{padding:'0 1rem 0 1rem'}}>
                    <div className='fs-1 animationDropDown textShadowBlack'><span className='animationTurnOpaque'>Welcome to</span></div>
                    <div className='fs-1 animationSlideFromLeft textShadowBlack'><span>code</span><span>By</span><span
                            className='animationExpand'>Pe</span><span className='animationTurnGreen'>te</span></div>
                </figure>
            </div>

            <StationInLife />

            <main id="mainContent">{content}</main>

       </div>
    )
}