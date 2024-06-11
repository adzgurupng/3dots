import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import S1 from "../../assets/images/service/s1.jpg";
import S2 from "../../assets/images/service/s2.jpg";
import S3 from "../../assets/images/service/s3.jpg";
import S4 from "../../assets/images/service/s4.jpg";
import S5 from "../../assets/images/service/s5.jpg";
import S6 from "../../assets/images/service/s6.jpg";
const Services = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
            <div className="service ptb-100 bg-f9faff">
                <Container>
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR SERVICES</h6>
                        <h3>CLEANING SERVICES WE OFFER</h3>
                    </div>
                    <div className="section-content">
                        <Row>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3 ">
                                    <div className="service-card-img-3">
                                        <img src={S1} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="flaticon-residential"></i>
                                        <h4><Link to="/house-cleaning" onClick={() => window.scrollTo(0, 0)}>House Cleaning</Link></h4>
                                        <p>When you opt for our regular house cleaning service, our expert team ensures all your cleaning needs are met.</p>
                                        <Link className="read-more-btn" onClick={() => window.scrollTo(0, 0)} to="/house-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3">
                                    <div className="service-card-img-3">
                                        <img src={S2} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="flaticon-shopping-cart-of-horizontal-lines-design"></i>
                                        <h4><Link onClick={() => window.scrollTo(0, 0)} to="/commercial-cleaning">Commercial Cleaning</Link></h4>
                                        <p>Our premier commercial cleaning service, boasting top-notch reviews, is at your service.</p>
                                        <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/commercial-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3">
                                    <div className="service-card-img-3">
                                        <img src={S3} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="fi fi-bs-apartment"></i>
                                        <h4><Link onClick={() => window.scrollTo(0, 0)} to="/apartment-cleaning">Apartment Cleaning</Link></h4>
                                        <p>We provide weekly and fortnightly apartment cleaning services tailored to your exact requirements.</p>
                                        <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/apartment-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3">
                                    <div className="service-card-img-3">
                                        <img src={S4} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="flaticon-employees"></i>
                                        <h4><Link onClick={() => window.scrollTo(0, 0)} to="/office-cleaning">Office Cleaning</Link></h4>
                                        <p>Our office cleaners have honed their expertise through unwavering dedication, which lies at the heart of our business ethos.</p>
                                        <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/office-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3">
                                    <div className="service-card-img-3">
                                        <img src={S5} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="flaticon-carpet"></i>
                                        <h4><Link onClick={() => window.scrollTo(0, 0)} to="/carpet-cleaning">Carpet Cleaning</Link></h4>
                                        <p>We provide carpet steam cleaning services for both residential and commercial spaces.</p>
                                        <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/carpet-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className="mb-5">
                                <div className="service-card-3">
                                    <div className="service-card-img-3">
                                        <img src={S6} alt="image" />
                                    </div>
                                    <div className="service-card-text-3">
                                        <i className="fi fi-bs-car"></i>
                                        <h4><Link onClick={() => window.scrollTo(0, 0)} to="/car-cleaning">Mobile Car Detailing</Link></h4>
                                        <p>At Mobile Car Detailing, we go beyond more washing and waxing. </p>
                                        <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/car-cleaning">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </>

    );
};

export default Services;