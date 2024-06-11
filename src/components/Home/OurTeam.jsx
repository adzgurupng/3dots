import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import T1 from "../../assets/images/team/t1.jpg";
import T2 from "../../assets/images/team/t2.jpg";
import T3 from "../../assets/images/team/t3.jpg";
import T4 from "../../assets/images/team/t4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const OurTeam = () => {
    return (
        <>
            <div className="team bg-f9faff ptb-100">
                <Container>
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR TEAM</h6>
                        <h3>Our Leadership Team</h3>
                    </div>
                    <div className="section-content">
                        <Row>
                            <Col lg="3" md="6" sm="6">
                                <div className="team-card">
                                    <img src={T1} alt="image" />
                                        <div className="team-text-area">
                                            <h4>Rossa Kali</h4>
                                            <p>Financial Officer</p>
                                            <div className="team-social-icons">
                                                <ul>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                            </Col>
                            <Col lg="3" md="6" sm="6">
                                <div className="team-card">
                                    <img src={T2} alt="image" />
                                        <div className="team-text-area">
                                            <h4>Pomasa Pok</h4>
                                            <p>Customer Officer</p>
                                            <div className="team-social-icons">
                                                <ul>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                            </Col>
                            <Col lg="3" md="6" sm="6">
                                <div className="team-card">
                                    <img src={T3} alt="image" />
                                        <div className="team-text-area">
                                            <h4>Marpa Buka</h4>
                                            <p>Operating Officer</p>
                                            <div className="team-social-icons">
                                                <ul>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                            </Col>
                            <Col lg="3" md="6" sm="6">
                                <div className="team-card">
                                    <img src={T4} alt="image" />
                                        <div className="team-text-area">
                                            <h4>Pok Manu</h4>
                                            <p>Staff Officer</p>
                                            <div className="team-social-icons">
                                                <ul>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                    <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                                </ul>
                                            </div>
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

export default OurTeam;