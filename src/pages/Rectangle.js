import React from 'react';

import Layout from '../components/Layout';


const Rectangle = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g className="rectangle-upper">
                <rect fill="#3bd46f" height="25" width="25" x="10" y="10"/>
                <rect fill="#f93a3a" height="25" width="25" x="40" y="10" rx="5"/>
                <rect fill="#fff055" height="25" width="25" x="70" y="10" ry="10"/>
            </g>
            <g className="rectangle-middle">
                <rect fill="#1e53e0" height="25" width="25" x="10" y="40" rx="97.5" ry="2.5"/>
                <rect fill="#fff" height="25" width="25" x="40" y="40" rx="5" ry="50"/>
                <rect fill="#000" height="25" width="25" x="70" y="40" rx="50" ry="5"/>
            </g>
            <g className="rectangle-lower">
                <rect fill="#fd6a90" height="20" width="80" x="12.5" y="70" rx="10" ry="20"/>
            </g>
        </svg>
    </Layout>
);


export default Rectangle;
