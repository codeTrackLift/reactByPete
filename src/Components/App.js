import React from 'react';
import Welcome from './Welcome';
import Footer from './Footer';
import '../Styles/App.css';
import ScrollMagic from 'scrollmagic';

function App() {

    const [background, setBackground] = React.useState('');
    const welcomeBackground = () => {
        const newBackground = 'vesselBackground';
        setBackground(newBackground);
    }
    setTimeout(welcomeBackground, 2900);

    return (
        <div id='App' className={background}>
            <Welcome />
            <Footer />
        </div>
    );
}

export default App;