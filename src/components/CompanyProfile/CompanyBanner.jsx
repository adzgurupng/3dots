import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


const ServicesBanner = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ServicesBanner;