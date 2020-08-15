import React from 'react';

import Layout from '../components/Layout';


const Polyline = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polyline fill="#f93a3a" stroke="#3bd46f" points="15,15 25,40 25,60 30,60 50,30 75,15"/>
            <polyline fill="#1e53e0" stroke="#fff055" points="70,40 40,75 40,90 90,90 95,60 70,80 60,75 65,55 75,70 90,50 75,50 70,45 70,40"/>
        </svg>
    </Layout>
);


export default Polyline;
