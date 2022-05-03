import React from 'react';
import '../../styles/Footer.css';

export const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {currentYear} 
                <img src="https://codetracklift.github.io/codeTrackLift/logos/pharma2code_icon.gif" 
                    className='d-none d-sm-inline'
                    style={{height:'2rem',padding:'0 0.25rem'}}
                    alt="codeByPete Logo."/>
                <span className='fst-italic'>
                    <span style={{color:"white"}}> code</span>
                    <span style={{color:"#00857c"}}>By</span>
                    <span style={{color:"lime"}}>Pete</span>
                </span>
            </p>
            <div>
                <a href="https://github.com/codeTrackLift/reactByPete#readme" 
                    target="_blank" rel='noreferrer'>
                    <img src="https://codetracklift.github.io/codeTrackLift/logos/GitHub-Mark-Light-64px.png" 
                        className='socialLogo' alt="GitHub Icon"/>
                </a>
                <a href="https://twitter.com/codetracklift" 
                    target="_blank" rel='noreferrer'>
                    <img src="https://codetracklift.github.io/codeTrackLift/logos/Twitter_social_icons-circle-white.png" 
                        className='socialLogo' alt="Twitter Icon"/>
                </a>
                <a href="https://www.linkedin.com/in/codebypete/" 
                    target="_blank" rel='noreferrer'>
                    <img src="https://codetracklift.github.io/codeTrackLift/logos/linkedin_white.png"         
                        className='socialLogo' alt="LinkedIn Icon"/>
                </a>
            </div>
        </footer>
    )

}