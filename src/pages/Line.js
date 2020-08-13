import React from 'react';

import Layout from '../components/Layout';


const Line = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g className="line-grid">
                <line stroke="#3bd46f" x1="50" x2="50" y1="90" y2="10"/>
                <line stroke="#f93a3a" x1="10" x2="90" y1="50" y2="50"/>
            </g>
            <g className="line-cross">
                <line stroke="#fff055" x1="20" x2="80" y1="20" y2="80"/>
                <line stroke="#1e53e0" x1="20" x2="80" y1="80" y2="20"/>
            </g>
        </svg>
    </Layout>
);


export default Line;
