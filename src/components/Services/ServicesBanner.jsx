import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

const GalleryBanner = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
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

export default GalleryBanner;