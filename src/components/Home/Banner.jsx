import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Logo from "../../images/logo.png";
// import Navbar from "../Home/NavBar";
import { Container, Col, Row } from 'react-bootstrap';
import Box1 from "../../assets/images/banner/box-shape1.png";
import Box2 from "../../assets/images/banner/box-shape2.png";
import HalfCircle from "../../assets/images/banner/half-circle.png";
import Banner3 from "../../assets/images/banner/banner-3.png";
import B3Dots from "../../assets/images/banner/b3-dots.png";
import DotCircle from "../../assets/images/banner/dot-circle.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPhone, } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <>
            <div className="main-banner banner bg-f9faff">
                <div className="shape">
                    <img className="black-line" src={Box1} alt="shape"/>
                        <img className="orange-line" src={Box2} alt="shape"/>
                            <img className="half-circle" src={HalfCircle} alt="shape"/>
                            </div>
                            <Container fluid>
                                <Row className="align-items-center">
                                    <Col lg="7">
                                        <div className="banner-text-area banner-text-area-3">
                                            <h6>WELCOME TO THREE DOTS!</h6>
                                            <h1>Dependable Commercial Cleaning Services</h1>
                                            <p>Most Trusted & Leading Commercial Cleaning Provider</p>
                                            <div className="d-flex ">
                                                <button className="default-button default-button-4 me-4 d-inline-block" onClick={() => scrollToSection('bookAServices')}><span className="me-3 d-inline-block"><FontAwesomeIcon icon={faBell} /></span><span>Book Online</span></button>

                                                <a className="default-button default-button-4 d-inline-block" href="tel: +675 320 0738"><span className="me-3 d-inline-block"><FontAwesomeIcon icon={faPhone} /></span><span>+675 320 0738</span></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="5">
                                        <div className="banner-img-area">
                                            <img className="main-img" src={Banner3} alt="image" />
                                                <div className="shapes">
                                                    <img className="b3-dot" src={B3Dots} alt="shape"/>
                                                        <img className="dot-circle" src={DotCircle} alt="shape" />
                                                        </div>
                                                </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </>

                        );
};

                        export default Banner;