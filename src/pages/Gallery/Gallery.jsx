import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import GalleryBanner from "../../components/Gallery/GalleryBanner";
import GalleryPortfolio from '../../components/Gallery/GalleryPortfolio';
const Gallery = () => {
    return (
        <>
            <GalleryBanner />
            <GalleryPortfolio />
        </>

    );
};

export default Gallery;