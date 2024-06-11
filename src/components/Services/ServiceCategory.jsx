import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import S1 from "../../assets/images/service/s1.jpg";
import S2 from "../../assets/images/service/s2.jpg";
import S3 from "../../assets/images/service/s3.jpg";
import S4 from "../../assets/images/service/s4.jpg";
import S5 from "../../assets/images/service/s5.jpg";
import S6 from "../../assets/images/service/s6.jpg";
import Shape212 from "../../assets/images/shape/shape-2.png";
import Shape213 from "../../assets/images/shape/shape-2-1.png";
const ServiceCategory = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
            <div className="service ptb-100">
                <Container>
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR SERVICES</h6>
                        <h3>We Provide Best Service</h3>
                    </div>
                    <div className="section-content">
                        <Row>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link to="/house-cleaning" onClick={() => window.scrollTo(0, 0)}><img src={S1} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                            <img className="shape1" src={Shape212} alt="image" />
                                                <img className="shape2" src={Shape213} alt="image" />
                                                <i className="flaticon-residential"></i>
                                                </div>
                                                <h4><Link to="/house-cleaning" onClick={() => window.scrollTo(0, 0)}>House Cleaning</Link></h4>
                                                <p>When you opt for our regular house cleaning service, our expert team ensures all your cleaning needs are met.</p>
                                                <Link className="read-more-btn" to="/house-cleaning" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                        </div>
                                    </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/commercial-cleaning"><img src={S2} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                        <img className="shape1" src={Shape212} alt="image" />
                                            <img className="shape2" src={Shape213} alt="image" />
                                            <i className="flaticon-shopping-cart-of-horizontal-lines-design"></i>
                                                </div>
                                                <h4><Link onClick={() => window.scrollTo(0, 0)} to="/commercial-cleaning">Commercial Cleaning</Link></h4>
                                                <p>Our premier commercial cleaning service, boasting top-notch reviews, is at your service.</p>
                                                <Link onClick={() => window.scrollTo(0, 0)} className="read-more-btn" to="/commercial-cleaning">Read More</Link>
                                                </div>
                                    </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link to="/apartment-cleaning" onClick={() => window.scrollTo(0, 0)}><img src={S3} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                        <img className="shape1" src={Shape212} alt="image" />
                                        <img className="shape2" src={Shape213} alt="image" />
                                                <i className="fi fi-bs-apartment"></i>
                                                </div>
                                                <h4><Link to="/apartment-cleaning" onClick={() => window.scrollTo(0, 0)}>Apartment Cleaning</Link></h4>
                                        <p>We provide weekly and fortnightly apartment cleaning services tailored to your exact requirements.</p>
                                        <Link className="read-more-btn" to="/apartment-cleaning" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                        </div>
                                    </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link to="/office-cleaning" onClick={() => window.scrollTo(0, 0)}><img src={S4} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                        <img className="shape1" src={Shape212} alt="image" />
                                        <img className="shape2" src={Shape213} alt="image" />
                                        <i className="flaticon-employees"></i>
                                                </div>
                                                <h4><Link to="/office-cleaning" onClick={() => window.scrollTo(0, 0)}>Office Cleaning</Link></h4>
                                        <p>Our office cleaners have honed their expertise through unwavering dedication, which lies at the heart of our business ethos.</p>
                                        <Link className="read-more-btn" to="/office-cleaning" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                        </div>
                                    </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link to="/carpet-cleaning" onClick={() => window.scrollTo(0, 0)}><img src={S5} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                        <img className="shape1" src={Shape212} alt="image" />
                                        <img className="shape2" src={Shape213} alt="image" />
                                        <i className="flaticon-carpet"></i>
                                                </div>
                                                <h4><Link to="/carpet-cleaning" onClick={() => window.scrollTo(0, 0)}>Carpet Cleaning</Link></h4>
                                        <p>We provide carpet steam cleaning services for both residential and commercial spaces.</p>
                                        <Link className="read-more-btn" to="/carpet-cleaning" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                        </div>
                                    </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='service_col'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <Link to="/car-cleaning" onClick={() => window.scrollTo(0, 0)}><img src={S6} alt="image" /></Link>
                                    </div>
                                    <div className="service-card-text">
                                        <div className="service-card-icon">
                                        <img className="shape1" src={Shape212} alt="image" />
                                            <img className="shape2" src={Shape213} alt="image" />
                                            <i className="fi fi-bs-car"></i>
                                                </div>
                                                <h4><Link to="/car-cleaning" onClick={() => window.scrollTo(0, 0)}>Mobile Car Cleaning</Link></h4>
                                        <p>At Mobile Car Cleaning, we go beyond more washing and waxing. </p>
                                        <Link className="read-more-btn" to="/car-cleaning" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                        </div>
                                    </div>
                            </Col>
                                                
                        </Row>
                    </div>
                    {/* <a className="mt-30 default-button default-button-3 pag-btn" href="services.html"><span>Load More</span></a> */}
                </Container>
            </div>
        </>

    );
};

export default ServiceCategory;