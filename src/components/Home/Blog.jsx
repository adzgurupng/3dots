import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import B1 from "../../assets/images/blog/b1.jpg";
import B2 from "../../assets/images/blog/b2.jpg";
import B3 from "../../assets/images/blog/b3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faCalendar } from '@fortawesome/free-solid-svg-icons';
const OurBlog = () => {
    return (
        <>
            <div className="blog ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR BLOG</h6>
                        <h3>Our Latest News</h3>
                    </div>
                    <div className="section-content">
                        <Row className="justify-content-center">
                            <Col lg="4" md="6" sm="12">
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)}><img src={B1} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="blog-details.html">Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 4th June 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)}>Analyzing the Expenses of End of Lease Cleaning</Link></h4>
                                        <p>Preparing for the end of your lease can be stressful. Making sure your property is in excellent condition for the final inspection is essential to getting your bond back.</p>
                                        <Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)} className="read-more-btn">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}><img src={B2} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="#">Spring Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 4th June 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}>A Complete Guide to Commercial Kitchen Cleaning: Ensuring a Safe and Hygienic Environment</Link></h4>
                                        <p>Proper commercial kitchen cleaning can greatly reduce the risks of foodborne illnesses and kitchen fires.</p>
                                        <Link className="read-more-btn" to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}><img src={B3} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="blog-details.html">Housekeeper</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 4th June 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}>A GUIDE TO SHINING APPLIANCES.</Link></h4>
                                        <p>Our kitchen appliances serve us daily, simplifying our lives and providing convenience.</p>
                                        <Link className="read-more-btn" to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </>

    );
};

export default OurBlog;