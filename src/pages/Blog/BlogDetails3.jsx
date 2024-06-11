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
                                        <img src={B3} alt="image"/>
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
                                        <h4>A guide to shining appliances.</h4>
                                        <p>Our kitchen appliances work hard for us every day, making our lives easier and more convenient. However, with regular use, they can accumulate grime, food residue, and mineral deposits, which not only affect their performance but also pose hygiene concerns. Proper cleaning and maintenance are essential to keep these appliances in top condition. In this guide, we'll walk you through simple yet effective methods to clean four of the most commonly used kitchen appliances: the microwave, kettle, toaster, and dishwasher.</p>

<p><b>1.Microwave Cleaning</b></p>
<p><b>Materials Needed:</b> A microwave-safe bowl, water, vinegar or lemon juice, a microfiber cloth or sponge.
Steps:
Fill the microwave-safe bowl with equal parts water and vinegar or add a few slices of lemon.
Place the bowl in the microwave and heat it on high for 2-3 minutes until the mixture boils and creates steam.
Let it sit for a few minutes to allow the steam to loosen the grime.
Carefully remove the bowl (it will be hot!) and wipe down the interior of the microwave with a damp cloth or sponge.</p>
<p>Pay special attention to the corners and the ceiling where food splatters tend to accumulate.
For stubborn stains, dip the cloth in a mixture of water and dish soap.
Finally, wipe down the exterior of the microwave with a damp cloth.</p>



<p><b>Kettle Cleaning</b></p>
<p><b>Materials Needed:</b> Water, vinegar or lemon juice, a soft brush or cloth.
Steps:
Fill the kettle halfway with equal parts water and vinegar or lemon juice.
Bring the mixture to a boil.
Turn off the kettle and let the solution sit for an hour.
After an hour, discard the solution and rinse the kettle thoroughly with clean water.
Use a soft brush or cloth to scrub away any remaining deposits or stains.
Pay attention to the spout and the interior bottom where limescale tends to accumulate.
Rinse the kettle again with clean water to remove any traces of vinegar or lemon juice.</p>


<p><b>Toaster Cleaning</b></p>
<p><b>Materials Needed:</b> A soft brush, dish soap, water, a sponge or cloth.
Steps:
Unplug the toaster and make sure it's completely cool before cleaning.
Remove the crumb tray and empty it into the trash.
Use a soft brush to gently dislodge any crumbs stuck inside the toaster slots.
Mix a small amount of dish soap with warm water.
Dip a sponge or cloth into the soapy water and wring out the excess.
Wipe down the exterior of the toaster, paying attention to any stains or spots.
For stainless steel toasters, wipe in the direction of the grain to prevent scratching.
Dry the toaster thoroughly with a clean towel before reassembling it.</p>



<p><b>Dishwasher Cleaning</b></p>
<p><b>Materials Needed:</b> White vinegar, baking soda, a toothbrush, a damp cloth.
Steps:
Remove the bottom rack of the dishwasher to access the drain.
Inspect the drain for any food particles or debris and remove them using a toothbrush or cloth.
Place a dishwasher-safe cup filled with white vinegar on the top rack.
Run a hot water cycle to allow the vinegar to clean and deodorize the dishwasher.
Once the cycle is complete, sprinkle baking soda on the bottom of the dishwasher.
Run another hot water cycle to further clean and deodorize the interior.
Wipe down the exterior of the dishwasher with a damp cloth.
Pay attention to the door seals and hinges where mold or mildew may develop.
Finally, replace the bottom rack and your dishwasher is ready for use.
Regular cleaning and maintenance of kitchen appliances not only ensure their longevity but also contribute to a healthier and more hygienic kitchen environment. With these simple cleaning methods, you can keep your microwave, kettle, toaster, and dishwasher sparkling clean and functioning efficiently for years to come.</p>

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
                                    {/* <div className="recent-news-card">
                                        <img src={B3} alt="image"/>
                                            <h5><NavLink to="/blog-details-3">A guide to shining appliances.</NavLink></h5>
                                            <p>4th June 2024</p>
                                    </div> */}
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