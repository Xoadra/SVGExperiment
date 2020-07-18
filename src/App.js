import React from 'react';

import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <h1>SVG Experiments</h1>
                <img src={logo} className="app-logo" alt="logo"/>
            </header>
            <nav className="app-navigation"/>
        </div>
    );
};


export default App;
