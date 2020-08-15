import React from 'react';

import Layout from '../components/Layout';
import Line from './Line';
import Rectangle from './Rectangle';
import Circle from './Circle';
import Ellipse from './Ellipse';
import Polyline from './Polyline';
import Polygon from './Polygon';
import Path from './Path';
import Face from './Face';


const Home = () => {
    const examples = [Line, Rectangle, Circle, Ellipse, Polyline, Polygon, Path, Face];
    return (
        <Layout>
            {examples[Math.floor(Math.random() * examples.length - 0)]()}
        </Layout>
    );
};


export default Home;
