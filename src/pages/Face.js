import React from 'react';

import Layout from '../components/Layout';


const Face = () => (
    <Layout>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g className="face-head">
                <ellipse fill="#ffcc99" cx="50" cy="50" rx="40" ry="40"/>
                <g className="face-eyes">
                    <g className="face-sclerae">
                        <ellipse fill="#fff" cx="30" cy="45" rx="10" ry="5"/>
                        <ellipse fill="#fff" cx="70" cy="45" rx="10" ry="5"/>
                    </g>
                    <g className="face-irises">
                        <ellipse fill="#3366ff" cx="30" cy="45" rx="5" ry="5"/>
                        <ellipse fill="#3366ff" cx="70" cy="45" rx="5" ry="5"/>
                    </g>
                    <g className="face-pupils">
                        <ellipse fill="#000" cx="30" cy="45" rx="2" ry="2"/>
                        <ellipse fill="#000" cx="70" cy="45" rx="2" ry="2"/>
                    </g>
                </g>
                <g className="face-mouth">
                    <path fill="#000" stroke="#e08d6f" d="M 35,70
                        A 30,40 0,0,0 45,75
                        A 45,70 0,0,0 55,75
                        A 55,70 0,0,0 65,70
                        A 65,70 0,0,0 55,68
                        A 55,68 0,0,0 45,68
                        A 45,68 0,0,0 35,70 z"
                    />
                </g>
            </g>
        </svg>
    </Layout>
);


export default Face;
