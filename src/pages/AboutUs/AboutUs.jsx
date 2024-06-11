import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import InnerBanner from "../../components/AboutUs/AboutBanner";
import InnerAbout from "../../components/AboutUs/innerAbout";
import FeaturedServices from "../../components/AboutUs/FeaturedServices";
import Testimonial from "../../components/Home/Testimonial";
const AboutUs = () => {
    return (
        <>
            <InnerBanner />
            <InnerAbout />
            <FeaturedServices />
            {/* <OurTeam /> */}
            <Testimonial />
        </>





    );
};

export default AboutUs;