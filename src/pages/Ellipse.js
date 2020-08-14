import React from 'react';

import Layout from '../components/Layout';


const Ellipse = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g className="ellipse-upper">
                <ellipse fill="#3bd46f" rx="15" ry="15" cx="25" cy="25"/>
                <ellipse fill="#f93a3a" rx="25" ry="10" cx="70" cy="15"/>
            </g>
            <g className="ellipse-lower">
                <ellipse fill="#1e53e0" rx="30" ry="15" cx="75" cy="25" transform="rotate(45)"/>
                <ellipse fill="#fff055" rx="20" ry="30" cx="80" cy="60"/>
            </g>
        </svg>
    </Layout>
);


export default Ellipse;
