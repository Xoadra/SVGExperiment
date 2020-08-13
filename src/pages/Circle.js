import React from 'react';

import Layout from '../components/Layout';


const Circle = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle fill="#fff055" r="15" cx="25" cy="25"/>
            <circle fill="#f93a3a" r="5" cx="80" cy="20"/>
            <circle fill="#1e53e0" r="30" cx="60" cy="60"/>
        </svg>
    </Layout>
);


export default Circle;
