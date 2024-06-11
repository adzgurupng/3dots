import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TC1 from "../../assets/images/testimonial/tc1.jpg";
import TC2 from "../../assets/images/testimonial/tc2.jpg";
import TC3 from "../../assets/images/testimonial/tc3.jpg";
const Testimonial = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
            <div className="testimonial ptb-100">
                <Container>
                    <div className="default-section-title default-section-title-middle">
                        <h6>Testimonials</h6>
                        <h3>What Our Client Say About Us</h3>
                    </div>
                    <div className="section-content">
                        <Row className="justify-content-center">
                            <Col lg="4" md="6" sm="12">
                                <div className="testimonial-card testimonial-card-3">
                                    <i className="flaticon-right-quote"></i>
                                    <div className="testimonial-footer">
                                        <img src={TC1} alt="image" />
                                            <div className="testimonial-footer-intro">
                                                <h4>Aaryan Richardson</h4>
                                                <p>Manager</p>
                                            </div>
                                    </div>
                                    <p>“I'm satisfied with the cleaning performed by this company. They arrived punctually and executed the cleaning to perfection, just as I had anticipated. Their services offer great value for money and exemplify professionalism.”</p>
                                    <div className="stars">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><span>4.0</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="testimonial-card testimonial-card-3">
                                    <i className="flaticon-right-quote"></i>
                                    <div className="testimonial-footer">
                                        <img src={TC2} alt="image" />
                                            <div className="testimonial-footer-intro">
                                                <h4>Jason Monroe</h4>
                                                <p>Manager</p>
                                            </div>
                                    </div>
                                    <p>“They swiftly completed the cleaning of my studio without any delays. Their efficiency and professionalism were remarkable, and their assistance ensured I received my bond back.”</p>
                                    <div className="stars">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><span>4.0</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="testimonial-card testimonial-card-3">
                                    <i className="flaticon-right-quote"></i>
                                    <div className="testimonial-footer">
                                        <img src={TC3} alt="image" />
                                            <div className="testimonial-footer-intro">
                                                <h4>Laurie Riddle</h4>
                                                <p>Manager</p>
                                            </div>
                                    </div>
                                    <p>“ This cleaning service is truly outstanding! From the initial inquiry to the actual cleaning service, the process was seamless. Not only did they deliver exceptional cleaning, but we also received our bond money back. I highly recommend them!”</p>
                                    <div className="stars">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><span>4.0</span></li>
                                        </ul>
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

export default Testimonial;