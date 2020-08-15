import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Line from './pages/Line';
import Rectangle from './pages/Rectangle';
import Circle from './pages/Circle';
import Ellipse from './pages/Ellipse';
import Polyline from './pages/Polyline';
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
            <Link to="/line">Line</Link>
            <Link to="/rectangle">Rectangle</Link>
            <Link to="/circle">Circle</Link>
            <Link to="/ellipse">Ellipse</Link>
            <Link to="/polyline">Polyline</Link>
            <Link to="/face">Face</Link>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/line" component={Line}/>
        <Route path="/rectangle" component={Rectangle}/>
        <Route path="/circle" component={Circle}/>
        <Route path="/ellipse" component={Ellipse}/>
        <Route path="/polyline" component={Polyline}/>
        <Route path="/face" component={Face}/>
    </BrowserRouter>
);


export default App;
