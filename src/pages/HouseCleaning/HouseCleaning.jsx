import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import HouseCleaningImg from "../../assets/images/service/housecleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const HouseCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>House Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>House Cleaning Services</li>
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
                                    <img src={HouseCleaningImg} alt="image" />
                                </div>
                                <h3>About Residential Cleaning And How Does It Work</h3>
                                <p>Maintaining a clean house is crucial for a comfortable living environment.</p>

                                <p>While everyone agrees that a clean house is ideal, finding the time to do it yourself can be challenging.</p>

                                <p>Many people would prefer to clean themselves but often lack the time to keep up with it regularly.</p>

                                <p>Understanding that your schedule might not always allow for cleaning, Three Dots Clean Service is here to help.</p>

                                <p>We provide weekly and fortnightly house cleaning services tailored to your needs.</p>
                                <h3>What Services Do We Offer for Your Home Cleaning Needs?</h3>
                                <ul className="details-list">
                                    <li>Mopping and vacuuming hard floors in kitchens, bathrooms, bedrooms, and living areas.</li>
                                    <li>Carpet and upholstery cleaning, including steam and deep cleaning methods.</li>
                                    <li>Dusting and cleaning surfaces, kitchen countertops, cabinets, range hoods, and appliances.</li>
                                </ul>
                                <p>When you enlist the services of cleaners like Three Dots Clean Service, you can trust that all your cleaning requirements will be met. With our dedicated team of hardworking cleaners and top-notch equipment, we consistently deliver high-quality cleaning results.</p>
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
                                <h3>Return to a Clean Home Every Day</h3>
                                <p>You always desire to walk into a pristine home, and our regular house cleaning service professionals ensure just that. We meticulously tend to every detail, leaving no corner untouched.</p>

                                <p>Our dedication to client satisfaction is reflected in the numerous recommendations we receive for our cleaning services. With over ten years of experience in cleaning homes, we take pride in offering the finest home cleaning services the city has to offer.</p>
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

export default HouseCleaning;