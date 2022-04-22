import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import '../styles/App.css';
import '../styles/Typography.css';
import '../styles/Navbar.css';
import { Welcome } from './Welcome';
import { About } from './About';
import { Blog } from './Blog';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Contact } from './Contact';
import pharma2CodeLogo from '../images/pharma2code_icon.gif';


export default function App() {
    
    const [expanded, setExpanded] = useState(false);
    const [isWelcome, setIsWelcome] = useState(null);
    
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        if(pathname.length === 1) setIsWelcome('d-none');
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }      

    return (
        <BrowserRouter>
            <div id='App'>
                <Navbar id='navbar' 
                    expanded={expanded} 
                    expand='sm' 
                    className="navbar navbar-expand-sm navbar-dark bg-transparent sticky-top">
                    <Navbar.Toggle className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarTogglerDemo02" 
                        aria-controls="navbarTogglerDemo02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        onClick={() => setExpanded(expanded ? false : 'expanded')}>
                        <img id='pharma2CodeLogo' src={pharma2CodeLogo} alt='Pill inside angle bracket logo' />
                    </Navbar.Toggle>
                    <h3 style={{fontStyle:'italic',letterSpacing:'2vw',transition:'all 1s ease-in-out'}} className='d-block d-sm-none'>
                        <span id='navbarCBP' className={isWelcome}>
                            <span style={{color:'white'}}>code</span>
                            <span style={{color:'#00857c'}}>By</span>
                            <span style={{color:'lime'}}>Pete</span>
                        </span>
                    </h3>
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Nav.Link id='welcomeNavLink' eventKey={1} onClick={() => setExpanded(false)} href='/reactByPete/' as={NavLink} to='/reactByPete/'>Welcome</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => setExpanded(false)} href='/reactByPete/about' as={NavLink} to='/reactByPete/about'>About</Nav.Link>
                            <Nav.Link eventKey={3} onClick={() => setExpanded(false)} href='/reactByPete/blog' as={NavLink} to='/reactByPete/blog'>Blog</Nav.Link>
                            <Nav.Link eventKey={4} onClick={() => setExpanded(false)} href='/reactByPete/projects' as={NavLink} to='/reactByPete/projects'>Projects</Nav.Link>
                            <Nav.Link eventKey={5} onClick={() => setExpanded(false)} href='/reactByPete/resume' as={NavLink} to='/reactByPete/resume'>Resume</Nav.Link>
                            <Nav.Link eventKey={6} onClick={() => setExpanded(false)} href='/reactByPete/contact' as={NavLink} to='/reactByPete/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <ScrollToTop />
                <Routes>
                    <Route path="/reactByPete/*" element={<Welcome/>} />
                    <Route path="/reactByPete/about" element={<About/>} />
                    <Route path="/reactByPete/blog" element={<Blog/>} />
                    <Route path="/reactByPete/projects" element={<Projects/>} />
                    <Route path="/reactByPete/resume" element={<Resume/>} />
                    <Route path="/reactByPete/contact" element={<Contact/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}