import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Face from './pages/Face';
import Layout from './components/Layout';
import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className="app">
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
                    <Link to="/face">Face</Link>
                </nav>
                <Route path="/" exact>
                    <Layout>
                        <p>Select an SVG illustration to view.</p>
                    </Layout>
                </Route>
                <Route path="/face" component={Face}/>
            </BrowserRouter>
        </div>
    );
};


export default App;
