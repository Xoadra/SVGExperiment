import React from 'react';

import Layout from '../components/Layout';


const Path = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path fill="#3bd46f" d="M 10 10
                L 40 10
                L 40 25
                L 10 25"
            />
            <path fill="#fff055" d="M 25 35
                H 55
                V 45
                h -25"
            />
            <path fill="#f93a3a" d="M 45 15
                C 45 10, 60 10, 60 15
                S 45 20, 45 15"
            />
            <path fill="#1e53e0" d="M 75 15
                Q 80 15, 85 20
                Q 90 25, 90 30
                Q 90 35, 75 35
                Q 75 35, 75 35
                Q 60 35, 60 30
                Q 60 25, 65 20
                Q 70 15, 75 15"
            />
            <path fill="#7e1bc1" d="M 15 35
                Q 17.5 40, 12.5 45
                T 15 55
                Q 12.5 50, 17.5 45
                T 15 35"
            />
            <path fill="#fd6a90" d="M 70 55
                A 5 5, 0 0 1, 85 55
                A 30 20, 0 0 1, 70 72.5
                A 30 20, 0 0 1, 55 55
                A 5 5, 0 0 1, 70 55"
            />
        </svg>
    </Layout>
);


export default Path;
