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
                                        <img src={B6} alt="image"/>
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
                                        <h4>Top Reasons to Opt for a Professional Post-Construction or Builder Cleaning Service</h4>
                                        <p><b>1. Expertise and Experience</b><br/>
Specialized Knowledge: Professionals are trained in cleaning post-construction environments, understanding the specifics of different materials and surfaces.
Use of Appropriate Techniques: They employ industry-standard methods to ensure thorough cleaning without causing damage.</p>
<p><b>2. Safety</b><br/>
Handling of Hazardous Materials: Construction sites often have hazardous materials like nails, glass, and dust. Professionals know how to handle and dispose of these safely.
Proper Equipment: They use specialized equipment to safely and efficiently clean areas that might be difficult or dangerous for an untrained person to reach.</p>
<p><b>3. Time Efficiency</b><br/>
Speed: Professionals can complete the cleaning much faster than an individual or an untrained team.
Availability: Hiring a team allows you to focus on other important tasks, such as project management or moving in.</p>
<p><b>4. Comprehensive Cleaning</b><br/>
Attention to Detail: Professionals ensure no spot is missed, covering areas that might be overlooked in DIY cleaning.
Post-Inspection: They often conduct a thorough inspection post-cleaning to ensure everything is spotless.</p>
<p><b>5. Quality of Results</b><br/>
High Standards: Professional services guarantee high-quality results, ensuring the space is not just clean but presentable.
Use of Professional-Grade Products: They use cleaning agents and tools that are often more effective than those available to the general public.</p>
<p><b>6. Cost-Effectiveness</b><br/>
Value for Money: While it might seem like an added expense, the efficiency and thoroughness of professional cleaning can prevent potential damage costs and save money in the long run.
Reduction in Post-Cleaning Costs: A professional clean reduces the likelihood of needing further cleaning or repairs due to improper initial cleaning.</p>
<p><b>7. Health Benefits</b><br/>
Reduction of Dust and Allergens: Construction sites can leave behind dust and allergens that professional cleaners are equipped to handle.
Improved Air Quality: Proper cleaning ensures that air quality is safe for inhabitants, reducing the risk of respiratory issues.</p>
                                        {/* <div className="blog-quote">
                                            <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                                            <h5><i className="fas fa-quote-right"></i> <span>Katherine</span></h5>
                                        </div> */}
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
                                        <img src={B1} alt="image"/>
                                            <h5><NavLink to="/blog-details-1" onClick={() => window.scrollTo(0, 0)}>Analyzing the Expenses of End of Lease Cleaning</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div>
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
                                    {/* <div className="recent-news-card">
                                        <img src={B6} alt="image"/>
                                            <h5><NavLink to="/blog-details-6" onClick={() => window.scrollTo(0, 0)}>Top Reasons to Opt for a Professional Post-Construction or Builder Cleaning Service</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div> */}
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