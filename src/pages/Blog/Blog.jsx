import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import B1 from "../../assets/images/blog/b1.jpg";
import B2 from "../../assets/images/blog/b2.jpg";
import B3 from "../../assets/images/blog/b3.jpg";
import B4 from "../../assets/images/blog/b4.jpg";
import B5 from "../../assets/images/blog/b5.jpg";
import B6 from "../../assets/images/blog/b6.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faCalendar } from '@fortawesome/free-solid-svg-icons';
const Blog = () => {
    return (
        <>

            <div className="uni-banner blog">
                <div className="container">
                <div className="uni-banner-text">
                    <h1>Blog</h1>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Blog</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="blog ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR BLOG</h6>
                        <h3>Our Latest News</h3>
                    </div>
                    <div className="section-content">
                        <Row className="justify-content-center">
                            <Col lg="4" md="6" sm="12" className='mb-5'>
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)}><img src={B1} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="/blog-details-1">Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 4 June 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)}>Analyzing the Expenses of End of Lease Cleaning</Link></h4>
                                        <p>Preparing for the end of your lease can be stressful. Making sure your property is in excellent condition for the final inspection is essential to getting your bond back.</p>
                                        <Link to="/blog-details-1" onClick={() => window.scrollTo(0, 0)} className="read-more-btn">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='mb-5'>
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
                                                <li><FontAwesomeIcon icon={faCalendar} /> 1 May 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}>Maintaining a Safe and Sanitary Space: A Comprehensive Guide to Commercial Kitchen Cleaning</Link></h4>
                                        <p>Proper commercial kitchen cleaning can greatly reduce the risks of foodborne illnesses and kitchen fires.</p>
                                        <Link className="read-more-btn" to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='mb-5'>
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
                                                <li><FontAwesomeIcon icon={faCalendar} /> 1 May 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}>A GUIDE TO SHINING APPLIANCES.</Link></h4>
                                        <p>Our kitchen appliances serve us daily, simplifying our lives and providing convenience.</p>
                                        <Link className="read-more-btn" to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                    </div>
                                </div>
                            </Col>


                            <Col lg="4" md="6" sm="12" className='mb-5'>
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-4" onClick={() => window.scrollTo(0, 0)}><img src={B4} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="blog-details.html">Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 1 May 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-4" onClick={() => window.scrollTo(0, 0)}>The process of taking specific steps to ensure that your vehicle is ready to operate safely and efficiently during the winter months</Link></h4>
                                        <p>Cold weather can pose significant challenges for your vehicle, impacting aspects such as battery performance and tyre pressure.</p>
                                        <Link to="/blog-details-4" onClick={() => window.scrollTo(0, 0)} className="read-more-btn">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='mb-5'>
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-5" onClick={() => window.scrollTo(0, 0)}><img src={B5} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="#">Spring Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 1 May 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-5" onClick={() => window.scrollTo(0, 0)}>
                                        
                                        Reasons Your Restaurant Should Invest in a Professional Commercial Cleaning Service</Link></h4>
                                        <p>
In the restaurant industry, maintaining cleanliness and safety is crucial. It's not only essential for making a positive first impression on customers but also for ensuring everyone's health.</p>
                                        <Link className="read-more-btn" to="/blog-details-5" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" className='mb-5'>
                                <div className="blog-card blog-card-3">
                                    <div className="blog-card-img">
                                        <Link to="/blog-details-6" onClick={() => window.scrollTo(0, 0)}><img src={B6} alt="image" /></Link>
                                        {/* <a className="blog-card-category" href="blog-details.html">Housekeeper</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 1 May 2024</li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog-details-6" onClick={() => window.scrollTo(0, 0)}>Top Reasons to Opt for a Professional Post-Construction or Builder Cleaning Service</Link></h4>
                                        <p>As the construction team finishes up, gathering their tools and moving on to their next project, your excitement grows at the prospect of finally living in your dream home.</p>
                                        <Link className="read-more-btn" to="/blog-details-6" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
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

export default Blog;