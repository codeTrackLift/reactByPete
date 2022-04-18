import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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

function App() {

    const [expanded, setExpanded] = React.useState(false);

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
                    <h3 id='navbarCBP' 
                        className="d-block d-sm-none" 
                        style={{fontStyle:'italic',letterSpacing:'2vw'}}>
                        <span style={{color:'white'}}>code</span>
                        <span style={{color:'#00857c'}}>By</span>
                        <span style={{color:'lime'}}>Pete</span>
                    </h3>
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Nav.Link eventKey={1} onClick={() => setExpanded(false)} href='*' as={NavLink} to='/'>Welcome</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => setExpanded(false)} href='/About' as={NavLink} to='/About'>About</Nav.Link>
                            <Nav.Link eventKey={3} onClick={() => setExpanded(false)} href='/Blog' as={NavLink} to='/Blog'>Blog</Nav.Link>
                            <Nav.Link eventKey={4} onClick={() => setExpanded(false)} href='/Projects' as={NavLink} to='/Projects'>Projects</Nav.Link>
                            <Nav.Link eventKey={5} onClick={() => setExpanded(false)} href='/Resume' as={NavLink} to='/Resume'>Resume</Nav.Link>
                            <Nav.Link eventKey={6} onClick={() => setExpanded(false)} href='/Contact' as={NavLink} to='/Contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Routes>
                    <Route path="*" element={<Welcome/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Blog" element={<Blog/>} />
                    <Route path="/Projects" element={<Projects/>} />
                    <Route path="/Resume" element={<Resume/>} />
                    <Route path="/Contact" element={<Contact/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;