import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Col, Row } from 'react-bootstrap';


const InnerBanner = () => {
    return (
        <>
            <div className="uni-banner about">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>About Us</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InnerBanner;