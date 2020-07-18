import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <header className="app-header">
                    <Link to="/" className="app-link">
                        <img src={logo} className="app-logo" alt="logo"/>
                        <h1>SVG Experiments</h1>
                        <img src={logo} className="app-logo" alt="logo"/>
                    </Link>
                </header>
                <nav className="app-navigation"/>
                <Route path="/">
                    <section className="app-section">
                        <p>Select an SVG illustration to view.</p>
                    </section>
                </Route>
            </BrowserRouter>
        </div>
    );
};


export default App;
