import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Odometer from 'react-odometerjs';
import { Container, Col, Row } from 'react-bootstrap';
import A11 from "../../assets/images/about/a1-1.png";
import A12 from "../../assets/images/about/a1-2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons';
const InnerAbout = () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(8925), 2000);
        const timeoutId1 = setTimeout(() => setValue1(627), 2000);
        const timeoutId2 = setTimeout(() => setValue2(9552), 2000);
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
        };
    }, []);
    return (
        <>
            <div className="about about-1 ptb-100">
                <Container fluid>
                    <div className="row align-items-center">
                        <Col xl="6" lg="12" md="12" sm="12">
                            <div className="about-img-area">
                                <div className="about-img-1">
                                    <img src={A11} alt="image" />
                                </div>
                                <div className="about-img-2">
                                    <img src={A12} alt="image" />
                                        {/* <a className="video-popup" href="https://www.youtube.com/watch?v=0qNsC-NLuhM"><i className="flaticon-play-button"></i></a> */}
                                </div>
                            </div>
                        </Col>
                        <Col xl="6" lg="12" md="12" sm="12">
                            <div className="about-text-area">
                                <div className="default-section-title">
                                    <h6>ABOUT US</h6>
                                    <h3>WHO IS THREE DOTS CLEAN SERVICE?</h3>
                                </div>
                                <div className="about-list">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheckSquare} /> Are you in need of a helping hand to clean your home? </li>
                                        <li><FontAwesomeIcon icon={faCheckSquare} /> Searching for a reliable cleaning services company for your commercial premises?</li>
                                        <li><FontAwesomeIcon icon={faCheckSquare} /> Looking for an easy way to make your car sparkle like new? </li>
                                        <li><FontAwesomeIcon icon={faCheckSquare} /> Call Clean Service!</li>
                                    </ul>
                                </div>
                                <p>If you're wondering, "Where are the professional cleaning companies near me?" then your search ends here! Our cleaning services company is ready to assist you with an exceptional range of cleaning services to revitalize your home, business, or car.</p>

                                <p>Whether you're in need of residential or commercial cleaning services, we prioritize communication and understanding your unique requirements. Our team of cleaning specialists will engage with you to craft a customized plan tailored specifically to your needs, all at a price that fits your budget!</p>
                                <div className="fun-facts-area">
                                    <Row className="justify-content-center">
                                        <Col lg="4" md="4" sm="6">
                                            <div className="fun-facts-card">
                                                <i class="fi fi-rr-home"></i>
                                                <h2><Odometer value={value} /><sup>+</sup></h2>
                                                <p>House Cleaned</p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4" sm="6">
                                            <div className="fun-facts-card">
                                                <i class="fi fi-rr-city"></i>
                                                <h2><Odometer value={value1} /><sup>+</sup></h2>
                                                <p>Office Cleaned</p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4" sm="6">
                                            <div className="fun-facts-card">
                                                <i class="fi fi-tr-smile-beam"></i>
                                                <h2><Odometer value={value2} /><sup>+</sup></h2>
                                                <p>Happy Clients</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default InnerAbout;