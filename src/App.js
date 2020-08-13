import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Line from './pages/Line';
import Rectangle from './pages/Rectangle';
import Circle from './pages/Circle';
import Face from './pages/Face';
import logo from './logo.svg';
import './App.css';


const App = () => (
    <BrowserRouter>
        <header className="app-header">
            <Link to="/">
                <img src={logo} className="app-logo" alt="logo"/>
                <h1>SVG Experiments</h1>
                <img src={logo} className="app-logo" alt="logo"/>
            </Link>
        </header>
        <nav className="app-navigation">
            <Link to="/">Home</Link>
            <Link to="/line">Line</Link>
            <Link to="/rectangle">Rectangle</Link>
            <Link to="/circle">Circle</Link>
            <Link to="/face">Face</Link>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/line" component={Line}/>
        <Route path="/rectangle" component={Rectangle}/>
        <Route path="/circle" component={Circle}/>
        <Route path="/face" component={Face}/>
    </BrowserRouter>
);


export default App;
