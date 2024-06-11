import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import B1 from "../../assets/images/blog/b1.jpg";
import B2 from "../../assets/images/blog/b2.jpg";
import B3 from "../../assets/images/blog/b3.jpg";
import B4 from "../../assets/images/blog/b4.jpg";
import B5 from "../../assets/images/blog/b5.jpg";
import B6 from "../../assets/images/blog/b6.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faCalendar, faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const BlogDetails1 = () => {
    return (
        <>
            <div className="uni-banner blog">
                <Container>
                    <div className="uni-banner-text">
                        <h1>Blog Details</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </Container>
            </div>


            <div className="blog ptb-100">
                <Container>
                    <Row>
                        <Col lg="8" md="12" sm="12">
                            <div className="blog-details-text-area pr-20">
                                <div className="blog-card mt-0">
                                    <div className="blog-card-img">
                                        <img src={B1} alt="image"/>
                                        {/* <a className="blog-card-category" href="blog-details.html">Cleaning</a> */}
                                    </div>
                                    <div className="blog-card-text">
                                        <div className="blog-date">
                                            <ul>
                                                <li><FontAwesomeIcon icon={faUser} /> By Admin</li>
                                                <li><FontAwesomeIcon icon={faComment} /> No Comments</li>
                                                <li><FontAwesomeIcon icon={faCalendar} /> 4 June 2024</li>
                                            </ul>
                                        </div>
                                        <h4>Analyzing the Expenses of End of Lease Cleaning</h4>
                                        <p>Preparing for the end of your lease can be a stressful time. Ensuring your property is in top-notch condition for the final inspection is crucial to securing your bond return. Understanding the essentials of end of lease cleaning in Sydney can help make this process smoother and more manageable.</p>
                                        <p>Getting a clear understanding of the costs involved in end-of-lease cleaning can help you plan and budget more effectively. Here, we break down the various elements that contribute to the overall cost and provide you with a comprehensive view of what to expect.</p>
                                        {/* <div className="blog-quote">
                                            <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                                            <h5><i className="fas fa-quote-right"></i> <span>Katherine</span></h5>
                                        </div> */}

                                        <h5>Breakdown of End of Lease Cleaning Costs</h5>
                                        <p>The cost of end of lease cleaning is influenced by several key factors, each contributing to the final price. In Sydney, expect to pay from $350 for end-of-lease cleaning services. Here's a detailed breakdown:</p>


                                        <p><b>Property Size and Type</b></p>
                                        <p><b>Apartments:</b> Smaller spaces like one-bedroom or two-bedroom apartments generally cost less due to the reduced area that needs cleaning.</p>
                                        <p><b>Houses:</b> Larger properties with multiple bedrooms, living areas, and outdoor spaces typically require more time and resources, leading to higher costs.</p>
                                        <p><b>Condition of the Property</b></p>
                                        <p><b>Well-Maintained:</b> If the property has been kept in good condition with regular cleaning, the overall cost may be lower as it requires less intensive work.</p>
                                        <p><b>Neglected Properties:</b> Properties that have not been regularly cleaned or have accumulated significant dirt and grime will require more effort and time, increasing the cost.</p>
                                        <p><b>Additional Services</b></p>
                                        <p><b>Carpet Cleaning:</b> Deep cleaning carpets can add to the overall cost but is often necessary to remove stains and odours.
                                        Window Cleaning: Cleaning windows, especially those that are hard to reach, can also add to the cost.</p>
                                        <p><b>Balcony/Outdoor Area Cleaning:</b> If your property includes a balcony or outdoor area, cleaning these spaces can increase the total price.</p>
                                        <p><b>Location and Accessibility</b></p>
                                        <p><b>Inner City vs. Suburbs:</b> Properties located in the inner city might have higher cleaning costs due to higher demand and travel expenses for cleaning teams.</p>
                                        <p><b>Accessibility:</b> Easy access to the property can reduce costs, while difficult access (e.g., high floors without elevators) can increase the time and effort required.</p>
                                    </div>
                                </div>
                                <div className="blog-text-footer">
                                    {/* <div className="tag-area">
                                        <ul>
                                            <li><i className="fas fa-tags"></i></li>
                                            <li>Cleaning,</li>
                                            <li>House,</li>
                                            <li>Window</li>
                                        </ul>
                                    </div> */}
                                    <div className="social-icons">
                                        <ul>
                                            <li><span>Share:</span></li>
                                            <li><NavLink to="#"><FontAwesomeIcon icon={faFacebookF} /></NavLink></li>
                                            <li><NavLink to="#"><FontAwesomeIcon icon={faLinkedin} /></NavLink></li>
                                            <li><NavLink to="#"><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
                                            <li><NavLink to="#"><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bd-form details-text-area bg-f9faff" id="bd-form">
                                    <h3>Leave A Reply</h3>
                                    <form>
                                        <Row>
                                            <Col md="6">
                                                <input type="text" className="form-control" placeholder="Name" required/>
                                            </Col>
                                            <Col md="6">
                                                <input type="email" className="form-control" placeholder="Email" required/>
                                            </Col>
                                            <Col md="6">
                                                <input type="text" className="form-control" placeholder="Phone" required/>
                                            </Col>
                                            <Col md="6">
                                                <input type="text" className="form-control" placeholder="Website" required/>
                                            </Col>
                                            <Col md="12">
                                                <textarea rows="5" className="form-control" placeholder="Message" required></textarea>
                                            </Col>
                                            <Col md="12">
                                                <button className="default-button" type="submit"><span>Post A Comment</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="12" sm="12">
                            <div className="sidebar-content pt-30">
                                <div className="sidebar-card search-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Here.." required/>
                                                <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="sidebar-card categories mt-30">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a className="active" href="blog-details.html"><i className="fas fa-angle-double-right"></i> Residential</a></li>
                                        <li><a href="blog-details.html"><FontAwesomeIcon icon={faAngleRight} /> Commercial</a></li>
                                        <li><a href="blog-details.html"><FontAwesomeIcon icon={faAngleRight} /> Construction</a></li>
                                        <li><a href="blog-details.html"><FontAwesomeIcon icon={faAngleRight} /> Windows</a></li>
                                        <li><a href="blog-details.html"><FontAwesomeIcon icon={faAngleRight} /> Carpet</a></li>
                                        <li><a href="blog-details.html"><FontAwesomeIcon icon={faAngleRight} /> Furniture</a></li>
                                    </ul>
                                </div> */}
                                <div className="sidebar-card recent-news">
                                    <h3>Recent News</h3>
                                    <div className="recent-news-card">
                                        <img src={B2} alt="image"/>
                                            <h5><NavLink to="/blog-details-2" onClick={() => window.scrollTo(0, 0)}>Maintaining a Safe and Sanitary Space: A Comprehensive Guide to Commercial Kitchen Cleaning</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src={B3} alt="image"/>
                                            <h5><NavLink to="/blog-details-3" onClick={() => window.scrollTo(0, 0)}>A guide to shining appliances.</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src={B4} alt="image"/>
                                            <h5><NavLink to="/blog-details-4" onClick={() => window.scrollTo(0, 0)}>The process of taking specific steps to ensure that your vehicle is ready to operate safely and efficiently during the winter months</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src={B5} alt="image"/>
                                            <h5><NavLink to="/blog-details-5" onClick={() => window.scrollTo(0, 0)}>Reasons Your Restaurant Should Invest in a Professional Commercial Cleaning Service</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src={B6} alt="image"/>
                                            <h5><NavLink to="/blog-details-6" onClick={() => window.scrollTo(0, 0)}>Top Reasons to Opt for a Professional Post-Construction or Builder Cleaning Service</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
                                </div>
                                {/* <div className="sidebar-card sd-tag">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><a href="blog-details.html">Cleaning</a></li>
                                        <li><a href="blog-details.html">House</a></li>
                                        <li><a href="blog-details.html">Housekeeper</a></li>
                                        <li><a href="blog-details.html">Wervice</a></li>
                                        <li><a href="blog-details.html">Wash</a></li>
                                        <li><a href="blog-details.html">Winndow</a></li>
                                    </ul>
                                </div> */}
                                <div className="sidebar-card calculate-area mt-30">
                                    <h3>Calculate</h3>
                                    <form>
                                        <input type="text" className="form-control" placeholder="Your Email"/>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected disabled>Square Meters</option>
                                                <option value="1">800 sqm</option>
                                                <option value="2">1200 sqm</option>
                                                <option value="3">1250+ sqm</option>
                                            </select>
                                            <button className="default-button" type="submit"><span>Calculate</span></button>
                                    </form>
                                </div>
                                <div className="sidebar-card mt-30 opening-card">
                                    <h3>Opening Hours</h3>
                                    <ul>
                                        <li><span>Mon-Thurs</span> <span>2:00AM - 5:00PM</span></li>
                                        <li><span>Fri-Sat</span> <span>2:00AM - 3:00PM</span></li>
                                        <li><span>Sun</span> <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </>

    );
};

export default BlogDetails1;