import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import A3 from "../../assets/images/about/a3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
            <div className="about about-1 pt-100">
                <Container fluid>
                    <Row>
                        <Col lg="6" md="12" sm="12">
                            <div className="about-img-area-3">
                                <img src={A3} alt="image" />
                                    <div className="about-img-list">
                                        <ul>
                                            <li><strong>100%</strong> Trusted Company</li>
                                            <li><strong>627</strong> Office Completed</li>
                                            <li><strong>9552</strong> Happy Clients</li>
                                        </ul>
                                    </div>
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <div className="about-text-area pl-20">
                                <div className="default-section-title">
                                    <h6>ABOUT US</h6>
                                    <h3>WHO IS THREE DOTS?</h3>
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
                                <Link className="default-button default-button-4" to="/about-us" onClick={() => window.scrollTo(0, 0)}><span>Read More</span></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    );
};

export default AboutUs;