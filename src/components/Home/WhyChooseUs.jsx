import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import A3 from "../../assets/images/about/a3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
        
        <div className="why-we ptb-100">
        <Container>
            <div className="default-section-title default-section-title-middle">
                <h6>WHY CHOOSE US</h6>
                <h3>Why Our Customer Choose Us</h3>
            </div>
            <div className="section-content">
                <Row>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="flaticon-technical-support"></i>
                            <h4>Experienced Staff</h4>
                            <p>
                                Count on our team of professional, experienced, and extensively trained cleaners to deliver impeccable service. Your space deserves nothing less than the best care.</p>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="flaticon-clock"></i>
                            <h4>Customized Schedules</h4>
                            <p>To ensure minimal disruption to your day-to-day operations, our cleaners are available after-hours if you do not require daytime cleaning services.</p>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="fi fi-bs-rugby-helmet"></i>
                            <h4>Best Equipment</h4>
                            <p>We utilize the latest cleaning equipment and industry-leading methods to deliver the best service possible.</p>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="fi fi-bs-percentage"></i>
                            <h4>Sign-Up Bonus</h4>
                            <p>Receive a K50 discount on your initial invoice as a token of appreciation for choosing us for your regular office cleaning service.</p>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="fi fi-bs-gavel"></i>
                            <h4>Enjoy a complimentary trial upon request</h4>
                            <p>Experience our service for free, and if for any reason you're not satisfied, you can cancel without any questions asked!</p>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="choose_holder">
                        <div className="why-we-card-3">
                            <i className="flaticon-user"></i>
                            <h4>Insured & Bounded</h4>
                            <p>We strive to source the best cleaners while ensuring your peace of mind by maintaining all necessary insurances.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
        
        </>

    );
};

export default WhyChooseUs;