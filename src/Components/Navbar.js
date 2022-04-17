import { Nav, Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import pharma2CodeLogo from '../Images/pharma2code_icon.gif';
import '../Styles/Navbar.css';

export default function MyNavbar() {

    return (
        <Navbar id='navbar' expand='sm' className="navbar navbar-expand-sm navbar-dark bg-transparent sticky-top">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img id='pharma2CodeLogo' src={pharma2CodeLogo} alt='Pill inside angle bracket logo' />
            </button>
            <h3 id='navbarCBP' className="d-block d-sm-none" style={{fontStyle:'italic',letterSpacing:'2vw'}}><span style={{color:'white'}}>code</span><span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></h3>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a id='navlinkWelcome' className="nav-link" href="../pages/welcome.html">Welcome</a>
                    </li>
                    <li className="nav-item">
                        <a id='navlinkAbout' className="nav-link" href="../pages/about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a id='navlinkBlog' className="nav-link" href="../pages/blog.html">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a id='navlinkProjects' className="nav-link" href="../pages/projects.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a id='navlinkResume' className="nav-link" href="../pages/resume.html">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a id='navlinkContact' className="nav-link" href="../pages/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </Navbar>

               
    )
}

// const navbar = document.getElementById('navbar');
// const myNavbar = `
//     <div className="container-fluid">
        
//     </div>`;

// const injectMyNavbar = () => navbar.innerHTML = myNavbar;
// const setActiveNavlink = (navlink) => {
//     document.getElementById(navlink).classList.add('active');
//     document.getElementById(navlink).ariaCurrent = 'page';
// }
// const navbarCBPRemove = () => {
//     document.getElementById('navbarCBP').classList.add('d-none');
// }

 // <Navbar id='navbar' expand='sm' className="navbar navbar-expand-sm navbar-dark bg-transparent sticky-top">
                //     <Container fluid>
        //         <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        //             <img id='pharma2CodeLogo' src={pharma2CodeLogo} alt='Pill inside angle bracket logo' />
        //             </Navbar.Toggle>
        //             <h3 id='navbarCBP' className="d-block d-sm-none" style={{fontStyle:'italic',letterSpacing:'2vw'}}><span style={{color:'white'}}>code</span><span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></h3>
        //         <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
        //             <Nav className='me-auto'>
        //                 <Nav.Link id='navlinkWelcome' className="nav-link" href="../pages/welcome.html">Welcome</Nav.Link>
        //                 <Nav.Link id='navlinkAbout' className="nav-link" href="../pages/about.html">About</Nav.Link>
        //                 <Nav.Link id='navlinkBlog' className="nav-link" href="../pages/blog.html">Blog</Nav.Link>
        //                 <Nav.Link id='navlinkProjects' className="nav-link" href="../pages/projects.html">Projects</Nav.Link>
        //                 <Nav.Link id='navlinkResume' className="nav-link" href="../pages/resume.html">Resume</Nav.Link>
        //                 <Nav.Link id='navlinkContact' className="nav-link" href="../pages/contact.html">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>