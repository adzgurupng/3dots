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
                                        <img src={B5} alt="image"/>
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
                                        <h4>Reasons Your Restaurant Should Invest in a Professional Commercial Cleaning Service</h4>
                                        <p>In the restaurant business, there's no room for mistakes, especially with keeping things clean and safe. This is super important not just to impress customers at first glance but to keep everyone healthy. Imagine finding a restaurant that's famous for delicious food and great service, but it's really dirty and doesn't care about cleanliness.</p>

                                        <p>That's why restaurants really need professional commercial restaurant cleaners. These experts do a much better job than just regular cleaning because they know exactly how to keep everything up to the highest standards, making sure your restaurant is a place where everyone loves to eat and feel good about it.</p>

                                        <p><b>3 Essential Signs It's Time for Professional Cleaning in Your Restaurant</b></p>
<p><b>First Look Isn't Inviting</b><br/>
Imagine walking up to a restaurant and not liking what you see from the outside. That's a big no-no. Your restaurant's outside should make people want to come in, not walk away. It's like when you meet someone for the first time; you want to make a good impression. If the outside of your place is dirty or messy, people might think, “If it looks this bad here, what's the kitchen like?”</p>

<p><b>Weird Smells</b><br/>
When customers walk in, you want them to be hit with the yummy smell of your food, not something stinky. If there's a bad smell, it can make people want to leave right away. Even if they stay, they might spend the whole time thinking about the smell instead of enjoying their meal. You don't want them to remember your restaurant as “that place that smelled bad.”</p>

<p><b>Dirty Tables and Floors</b><br/>
It's simple - if your place looks dirty, people won't want to eat there. Dirty tables, floors, and walls can make customers feel uncomfortable. They came to eat, not to wonder when the last time the table was cleaned. Keeping these areas clean isn't just about looking good; it's about showing your customers you care about their experience.</p>

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
                                    {/* <div className="recent-news-card">
                                        <img src={B5} alt="image"/>
                                            <h5><NavLink to="/blog-details-5" onClick={() => window.scrollTo(0, 0)}>Reasons Your Restaurant Should Invest in a Professional Commercial Cleaning Service</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div> */}
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