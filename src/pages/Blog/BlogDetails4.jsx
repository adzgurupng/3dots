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
                                        <img src={B4} alt="image"/>
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
                                        <h4>The process of taking specific steps to ensure that your vehicle is ready to operate safely and efficiently during the winter months</h4>
                                        <p>Cold weather can be particularly challenging for your car, affecting everything from the battery's performance to the tyre pressure. Preparing your car for cold weather is vital to ensure your vehicle's reliability and safety throughout winter.</p>

                                        <p>In this blog, we'll walk you through essential car winter maintenance tips and how to keep your car running smoothly in colder climates.</p>

<p><b>The challenges of cold weather</b></p>
<p>Understanding the challenge of colder weather and how it affects your vehicle is the first step towards effective winter car maintenance. Here's a more detailed look at the primary issues cold weather brings and how they impact your vehicle:</p>

<p><b>The effect of cold temperatures on your car's battery</b></p>
<p>Cold temperatures can significantly reduce your car's battery power. The chemical reactions required to generate electricity in a battery slow down in colder weather, reducing efficiency. A battery that's merely weak during the warmer months could become unreliable when the mercury drops, making it a struggle to start your car.</p>
<p>It's crucial to check your battery's health before and during winter. Consider having a professional test its charge level and, if necessary, replace an old or weak battery to avoid being stranded.</p>

<p><b>How winter conditions affect tyre pressure and traction</b></p>
<p>Tyre performance is critical to safe driving, and winter conditions can severely impact it. Cold air contracts, leading to a decrease in tyre pressure.</p>

<p>For every 10-degree drop in temperature, tyres can lose about 1-2 pounds of air pressure. This under-inflation compromises the tyre's ability to grip the road, especially in icy or snowy conditions, increasing the risk of accidents.</p>

<p>Regularly check your tyre pressure throughout winter and adjust as needed to ensure optimal performance. Additionally, consider investing in winter tyres made from a softer rubber compound designed to offer better traction in cold, snowy or icy conditions.</p>



<p><b>The importance of antifreeze in maintaining engine temperature</b></p>
<p>Antifreeze, or engine coolant, is essential for your car's winter operation. It does more than just prevent your engine's cooling system from freezing in cold weather; it also helps manage your engine's temperature to avoid overheating.</p>

<p>Antifreeze works by lowering the freezing point of the water in your car's radiator, ensuring it remains liquid and circulates properly, regardless of the outside temperature.</p>

<p>Before winter sets in, check your coolant levels and top up if necessary. It's also a good opportunity to inspect the system for leaks, which could lead to coolant loss and engine damage.</p>

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
                                    {/* <div className="recent-news-card">
                                        <img src={B4} alt="image"/>
                                            <h5><NavLink to="/blog-details-4" onClick={() => window.scrollTo(0, 0)}>The process of taking specific steps to ensure that your vehicle is ready to operate safely and efficiently during the winter months</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div> */}
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