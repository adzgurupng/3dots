import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import ServicesBanner from "../../components/Services/ServicesBanner";
import ServicesCategory from "../../components/Services/ServiceCategory";

const CompanyProfile = () => {
    return (
        <>
            <ServicesBanner />
            <ServicesCategory />
        </>

    );
};

export default CompanyProfile;