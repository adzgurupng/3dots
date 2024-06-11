import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import carpetcleaning from "../../assets/images/service/carpetcleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const CarpetCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Carpet Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>Carpet Cleaning Services</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service detials-page ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="details-text-area pr-20">
                                <div className="details-page-img">
                                    <img src={carpetcleaning} alt="image" />
                                </div>
                                <h3>About Carpet Cleaning And How Does It Work</h3>
                                <p>Professional carpet cleaners in Papua New Guinea are here for you. Have you heard about Three Dots Cleaning Service carpet cleaning? We offer the most compelling carpet cleaning in Papua New Guinea. Your carpet will undoubtedly look better after our service, and we ensure that you will be satisfied with the results. Additionally, we make sure that your carpet remains in good condition after cleaning. You can relax because we don't use aggressive methods or products. While there are strong carpet cleaning liquids available, they don't guarantee the safety of your carpet.</p>
                                <h3>Our Carpet Cleaning Service Includes:</h3>
                                <ul className="details-list">
                                    <li>We offer top-quality steam cleaning to rejuvenate your carpet and restore its appearance.</li>
                                    <li>Our steam cleaning is specifically designed to prevent your carpet from becoming discolored, stained, and worn out due to heavy traffic.</li>
                                    <li>Steam cleaning effectively removes trapped dirt, disinfects the carpet, and leaves it fresh and sterile.</li>
                                    <li>With our steam carpet cleaning, you can expect rapid drying times.</li>
                                    <li>Typically, your carpet will return to you as fresh as it was when you first purchased it.</li>
                                </ul>
                                <p>As an Papua New Guinea-based company, we are dedicated to providing the highest quality service to become the most trusted cleaners in Papua New Guinea. Our customers are our most valuable asset, and we prioritize their satisfaction above all else. With this perspective in mind, we exclusively utilize quality and safe cleaning products, ensuring the well-being of both our customers and the environment.</p>
                                {/* <div className="sd-img-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <img src="assets/images/service/s3.jpg" alt="image">
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <img src="assets/images/service/s2.jpg" alt="image">
                                        </div>
                                    </div>
                                </div> */}
                                <h3>Choose the best Carpet Cleaners in Papua New Guinea</h3>
                                <p>Our carpet cleaning service is entirely eco-friendly and highly effective at removing trapped dirt and germs from your carpet. Our trained and highly qualified carpet cleaners in Papua New Guinea delicately handle every aspect of cleaning and treat your home as if it were our own. For added value, our carpet steam cleaning service can be combined with rug cleaning.</p>

                                <p>At Three Dots Cleaning Service, quality is always paramount. Our customer satisfaction is our most valuable asset. We prioritize understanding our customers' needs and preferences before beginning any work. We believe that even minor details can make a significant difference, which is why we engage in thorough communication with our customers to ensure their complete satisfaction. Once an agreement is reached, we commence the work, consistently delivering top-notch results. This commitment to excellence is why we are considered the best in Papua New Guinea.</p>

                                <p>To schedule a service, simply call us at  +675 320 0738 or submit an online request. We will conduct a free inspection and provide you with a quotation. When you're ready to hire us, we'll get the job done for you. If you have any doubts, we encourage you to take a moment to read what our customers are saying on Google and Facebook. Your satisfaction is our priority.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-content pt-30">
                                <div className="sidebar-card categories mt-30">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><NavLink to="/house-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Residential</NavLink></li>
                                        <li><NavLink to="/commercial-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Commercial</NavLink></li>
                                        <li><NavLink to="/apartment-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Apartment</NavLink></li>
                                        <li><NavLink to="/office-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Office</NavLink></li>
                                        <li><NavLink to="/carpet-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Carpet</NavLink></li>
                                        <li><NavLink to="/car-cleaning"><FontAwesomeIcon icon={faAngleRight} /> Mobile Car</NavLink></li>
                                    </ul>
                                </div>
                                <div className="sidebar-card calculate-area mt-30">
                                    <h3>Calculate</h3>
                                    <form>
                                        <input type="text" className="form-control" placeholder="Your Email" />
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
                                        <li><span>Mon-Fri</span> <span>9:00AM - 6:00PM</span></li>
                                        <li><span>Sat</span> <span>9:00AM - 3:00PM</span></li>
                                        <li><span>Sun</span> <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default CarpetCleaning;