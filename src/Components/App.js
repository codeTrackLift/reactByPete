import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import '../Styles/App.css';
import '../Styles/Typography.css';
import '../Styles/Navbar.css';
import { Welcome } from './Welcome';
import { About } from './About';
import { Blog } from './Blog';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Contact } from './Contact';
import pharma2CodeLogo from '../Images/pharma2code_icon.gif';


export default function App() {
    
    const [expanded, setExpanded] = React.useState(false);
    const [isWelcome, setIsWelcome] = React.useState(null);
    
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        if(pathname.length === 1) {
            setIsWelcome(true);
        } 
        setIsWelcome(false);
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
                    <h3 style={{fontStyle:'italic',letterSpacing:'2vw'}}
                        className='d-block d-sm-none'
                    >
                        <span id='navbarCBP' className={() => setIsWelcome(isWelcome ? 'd-none' : null)}>
                            <span style={{color:'white'}}>code</span>
                            <span style={{color:'#00857c'}}>By</span>
                            <span style={{color:'lime'}}>Pete</span>
                        </span>
                    </h3>
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0" defaultActiveKey={isWelcome ? 1 : null}>
                            <Nav.Link eventKey={1} onClick={() => setExpanded(false)} href='*' as={NavLink} to='/'>Welcome</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => setExpanded(false)} href='/about' as={NavLink} to='/about'>About</Nav.Link>
                            <Nav.Link eventKey={3} onClick={() => setExpanded(false)} href='/blog' as={NavLink} to='/blog'>Blog</Nav.Link>
                            <Nav.Link eventKey={4} onClick={() => setExpanded(false)} href='/projects' as={NavLink} to='/projects'>Projects</Nav.Link>
                            <Nav.Link eventKey={5} onClick={() => setExpanded(false)} href='/resume' as={NavLink} to='/resume'>Resume</Nav.Link>
                            <Nav.Link eventKey={6} onClick={() => setExpanded(false)} href='/contact' as={NavLink} to='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <ScrollToTop />
                <Routes>
                    <Route path="*" element={<Welcome/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/resume" element={<Resume/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}