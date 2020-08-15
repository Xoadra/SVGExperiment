import React from 'react';

import Layout from '../components/Layout';
import Line from '../pages/Line';
import Rectangle from '../pages/Rectangle';
import Circle from '../pages/Circle';
import Ellipse from '../pages/Ellipse';
import Polyline from '../pages/Polyline';
import Face from '../pages/Face';


const Home = () => {
    const examples = [Line, Rectangle, Circle, Ellipse, Polyline, Face];
    return (
        <Layout>
            {examples[Math.floor(Math.random() * examples.length - 0)]()}
        </Layout>
    );
};


export default Home;
