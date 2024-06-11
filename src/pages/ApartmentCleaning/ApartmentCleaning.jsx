import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import HouseCleaningImg from "../../assets/images/service/housecleaning.jpg";
import ApartmentImage from "../../assets/images/service/apartmentcleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const ApartmentCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Apartment Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>Apartment Cleaning Services</li>
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
                                    <img src={ApartmentImage} alt="image" />
                                </div>
                                <h3>About Apartment Cleaning And How Does It Work</h3>
                                <p>Living in a bustling city such as Papua New Guinea presents challenges in maintaining a clean and comfortable living space in your apartment. Our expert team recognizes this and meticulously vacuums, dusts, and sanitizes every corner of your apartment. We ensure that all surfaces are free of dust, dirt, and grime, utilizing cutting-edge cleaning products and equipment to achieve exceptional results. Your apartment will be left sparkling clean after our service.</p>

                                <p>At Three Dots Cleaning Service, we believe in providing customized cleaning plans because we understand that one size does not fit all. With over a decade of industry experience, we have a deep understanding of our customers' expectations and strive to surpass them with each service. Our competitive pricing, coupled with our outstanding quality, positions us as the preferred choice for apartment cleaning in Papua New Guinea.</p>
                                <h3>What Services Do We Offer for Your Apartment Cleaning Needs?</h3>
                                <ul className="details-list">
                                    <li>Mopping and vacuuming hard floors in kitchens, bathrooms, bedrooms, and living areas.</li>
                                    <li>Carpet and upholstery cleaning, including steam and deep cleaning methods.</li>
                                    <li>Dusting and cleaning surfaces, kitchen countertops, cabinets, range hoods, and appliances.</li>
                                    <li>Removing cobwebs as part of regular house cleaning.</li>
                                    <li>Dusting and wiping down mirrors, window glass, and window sills (we can clean even the hard-to-reach windows and areas).</li>
                                    <li>Removing bin liners and rubbish.</li>
                                    <li>Scrubbing and washing out toilet interiors and exteriors.</li>
                                </ul>
                                {/* <p>When you enlist the services of cleaners like Three Dots Clean Service, you can trust that all your cleaning requirements will be met. With our dedicated team of hardworking cleaners and top-notch equipment, we consistently deliver high-quality cleaning results.</p> */}
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
                                <h3>Discovering the Ideal Apartment Cleaning Service for Your Papua New Guinea Apartment</h3>
                                <p>With our skilled and trained cleaners in Papua New Guinea, we ensure that the job meets the highest standards. Your office will be meticulously attended to, with every detail considered. If you have additional apartment cleaning concerns, we are open to discussion. Apartments often require customized cleaning solutions, and we are prepared to create a plan tailored to your needs. After all, it is your apartment, and we aim to clean it according to your preferences.</p>

                                <p>Call +675 320 0738 for a free inspection and quotation. Alternatively, you can submit a request online through our contact page. If you're unsure why you should choose us, feel free to check out our customer reviews on Google and Facebook.</p>

                                <p>In addition to apartment cleaning, we also offer end of lease cleaning and commercial cleaning services.</p>
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

export default ApartmentCleaning;