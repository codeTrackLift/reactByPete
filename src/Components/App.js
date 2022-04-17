import React from 'react';
import MyNavBar from './Navbar';
import Welcome from './Welcome';

import '../Styles/App.css';

function App() {

    const [background, setBackground] = React.useState('');
    const welcomeBackground = () => {
        const newBackground = 'vesselBackground';
        setBackground(newBackground);
    }
    setTimeout(welcomeBackground, 3000);

    return (
        <div id='App' className={background}>
            <MyNavBar />
            <Welcome />
            
        </div>
    );
}

export default App;