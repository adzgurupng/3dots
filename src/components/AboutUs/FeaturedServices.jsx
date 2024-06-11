import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Odometer from 'react-odometerjs';
import { Container, Col, Row } from 'react-bootstrap';

import Shape112 from "../../assets/images/shape/shape-1.png";
import Shape113 from "../../assets/images/shape/shape-1-1.jpg";
// import Shape113 from "../../assets/images/shape/shape-1.png";assets/images/shape/shape-1-1.jpg

import Shape114 from "../../assets/images/shape/shape-1-1.jpg";
const FeaturedServices = () => {
    return (
        <>
            <div className="features features-bg features-bg-4 pt-100">
                <Container>
                    <Row>
                        <Col xxl="4" xl="12" lg="12" md="12">
                            <div className="default-section-title">
                                <h6>FEATURES SERVICES</h6>
                                <h3>We Provide Best Features To clean Your Home And Office</h3>
                                <p>Utilizing the latest cleaning technologies and methods to ensure thorough cleanliness.</p>
                            </div>
                        </Col>
                        <Col xxl="8" xl="12" lg="12" md="12">
                            <div className="features-card-area">
                                <Row>
                                    <Col xl="6" lg="6" md="6" sm="6">
                                        <div className="features-card fmt-0">
                                            <div className="features-icon-area">
                                                <div className="features-card-icons">
                                                    <img className="shape1" src={Shape112} alt="image" />
                                                        <img className="shape2" src={Shape113} alt="image" />
                                                            <i className="flaticon-customer-support"></i>
                                                </div>
                                            </div>
                                            <div className="features-card-text">
                                                <h4>Send A Message</h4>
                                                <p>Providing various ways for clients to get in touch, such as via email, phone, live chat, or social media. This ensures that clients can choose the most convenient method for them.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl="6" lg="6" md="6" sm="6">
                                            <div className="features-card fmt-0">
                                                <div className="features-icon-area">
                                                <div className="features-card-icons">
                                                    <img className="shape1" src={Shape112} alt="image" />
                                                    <img className="shape2" src={Shape114} alt="image" />
                                                            <i className="flaticon-appointment"></i>
                                                        </div>
                                                </div>
                                                <div className="features-card-text">
                                                    <h4>Schedule Cleaning</h4>
                                                    <p>Allowing clients to choose from a variety of scheduling options that fit their busy lifestyles. This could include one-time cleanings, weekly, bi-weekly, or monthly services.</p>
                                                </div>
                                            </div>
                                    </Col>
                                    <Col xl="6" lg="6" md="6" sm="6">
                                        <div className="features-card">
                                            <div className="features-icon-area">
                                                <div className="features-card-icons">
                                                <img className="shape1" src={Shape112} alt="image" />
                                                <img className="shape2" src={Shape114} alt="image" />
                                                            <i className="flaticon-support-1"></i>
                                                        </div>
                                                </div>
                                                <div className="features-card-text">
                                                    <h4>Providing Service</h4>
                                                    <p>Ensuring that every cleaning task is carried out efficiently and thoroughly, leaving no corner untouched. This includes deep cleaning, sanitization, and attention to detail.</p>
                                                </div>
                                        </div>
                                    </Col>
                                    <Col xl="6" lg="6" md="6" sm="6">
                                        <div className="features-card">
                                            <div className="features-icon-area">
                                                <div className="features-card-icons">
                                                    <img className="shape1" src={Shape112} alt="image" />
                                                    <img className="shape2" src={Shape114} alt="image" />
                                                    <i className="flaticon-bag"></i>
                                                </div>
                                            </div>
                                            <div className="features-card-text">
                                                <h4>Finish The Job</h4>
                                                <p>Conducting a thorough inspection post-cleaning to ensure that all tasks have been completed to the client's satisfaction. Encouraging client feedback to continuously improve the services.</p>
                                            </div>
                                        </div>
                                    </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
        </Container>
</div>

                        </>
                        );
                    };

export default FeaturedServices;