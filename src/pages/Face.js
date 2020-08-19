import React from 'react';

import Layout from '../components/Layout';


const Face = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g className="face-head">
                <path fill="#ffcc99" d="M 50 15
                    C 50 15, 30 15, 25 27.5
                    Q 17.5 45, 25 60
                    C 25 60, 32.5 75, 45 80
                    Q 50 82, 55 80
                    C 67.5 75, 75 60, 75 60
                    Q 82.5 45, 75 27.5
                    C 70 15, 50 15, 50 15"
                />
                <g className="face-eyes">
                    <g className="face-sclerae">
                        <ellipse fill="#fff" cx="35" cy="45" rx="8" ry="4"/>
                        <ellipse fill="#fff" cx="65" cy="45" rx="8" ry="4"/>
                    </g>
                    <g className="face-irises">
                        <ellipse fill="#3366ff" cx="35" cy="45" rx="4" ry="4"/>
                        <ellipse fill="#3366ff" cx="65" cy="45" rx="4" ry="4"/>
                    </g>
                    <g className="face-pupils">
                        <ellipse fill="#000" cx="35" cy="45" rx="2" ry="2"/>
                        <ellipse fill="#000" cx="65" cy="45" rx="2" ry="2"/>
                    </g>
                </g>
                <g className="face-mouth">
                    <path fill="#000" stroke="#e08d6f" d="M 50 67.5
                        A 20 20, 0 0 0, 40 70
                        A 20 20, 0 0 0, 50 72.5
                        A 20 20, 0 0 0, 60 70
                        A 20 20, 0 0 0, 50 67.5 z"
                    />
                </g>
            </g>
        </svg>
    </Layout>
);


export default Face;
