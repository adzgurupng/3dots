import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WLogo from "../../assets/images/white-logo.png";
import TopTo from "../../assets/images/png/002-top.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone, faAngleRight  } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <>
        <div className="newsletter newsletter-1">
                <Container>
                    <div className="newsletter-content-area newsletter-content-area-3">
                        <Row className="align-items-center">
                            <Col lg="4" md="12" sm="12">
                                <div className="default-section-title">
                                    <h6>YOUR CLEANING COST</h6>
                                    <h3>Calculate</h3>
                                </div>
                            </Col>
                            <Col lg="8" md="12" sm="12">
                                <form>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="news-input-card">
                                                <input type="text" className="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="news-input-card">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected disabled>Square Meters </option>
                                                    <option value="1">Below 500sqm</option>
                                                    <option value="2">500 to 1000sqm</option>
                                                    <option value="3">1000+ sqm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="news-input-card">
                                                <button className="default-button"><span>Calculate</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <section className='footer'>
                <div className="footer footer-2 ptb-100 bg-000000">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-logo-area">
                                    <Link to="/" onClick={() => window.scrollTo(0, 0)}><img src={WLogo} alt="image" /></Link>
                                    <p>Premier and Most Reliable Commercial Cleaning Service.</p>
                                    <div className="footer-social-icons">
                                        <span>Follow Us:</span>
                                        <ul>
                                            <li><Link href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                            <li><Link href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                            <li><Link href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                            </li>
                                            <li><Link href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-links footer-contact-list">
                                    <h3>Get In Touch</h3>
                                    <div className="footer-content-card">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <h5>Location:</h5>
                                        <p><Link to="https://maps.app.goo.gl/mgYi2Cc8ypf42iv56"> Level 6 Avara Annex Brampton Street Granville Port Moresby</Link></p>
                                    </div>
                                    <div className="footer-content-card">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <h5>Email:</h5>
                                        <p><a href="mailto:reachus@domain.com">reachus@domain.com</a>
                                        </p>
                                    </div>
                                    <div className="footer-content-card">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <h5>Phone:</h5>
                                        <p><Link to="tel:+675 320 0738">+675 320 0738</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-links footer-quick-links">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><Link to="/about-us" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faAngleRight} />
                                            <span>About</span></Link></li>
                                        <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faAngleRight} /> <span>Our
                                            Services</span></Link></li>
                                        {/* <li><Link to="team.html" target="_blank"><FontAwesomeIcon icon={faAngleRight} /> <span>Our
                                            Team</span></Link></li> */}
                                        <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faAngleRight} /> <span>Our
                                            Blog</span></Link></li>
                                        <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faAngleRight} />
                                            <span>Contact</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-links footer-newsletter">
                                    <h3>Subscribe</h3>
                                    <p>Subscribe To Our Newsletter To Get Our Update News!</p>
                                    <form className="newsletter-form" data-toggle="validator">
                                        <input type="email" className="form-control" placeholder="Your email address" name="EMAIL"
                                            required autocomplete="off" />
                                            <button className="default-button" type="submit">
                                                Subscribe
                                            </button>
                                            <div id="validator-newsletter" className="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="copyright bg-000000">
                    <div className="container">
                        <p>Copyright @2024. <strong>Three Dots</strong> All Rights Reserved By 
                             <Link target="_blank" to="https://adzguru.co/"> Adzguru</Link>
                        </p>
                    </div>
                </div>


                <div className="go-top">
                    <img src={TopTo} alt="image" />
                </div>
            </section>

        </>
    );
};

export default Footer;