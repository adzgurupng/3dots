import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import OfficeCleaningImg from "../../assets/images/service/officecleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const HouseCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Office Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>Office Cleaning Services</li>
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
                                    <img src={OfficeCleaningImg} alt="image" />
                                </div>
                                <h3>About Office Cleaning And How Does It Work</h3>
                                <p>Three Dots Clean office cleaners in Papua New Guinea  have consistently delivered exceptional office cleaning services across the city, with customer satisfaction as our guiding principle. Our Papua New Guinea office cleaners bring years of experience in providing outstanding commercial and office cleaning services throughout Papua New Guinea, NSW. Office cleaning is one of our most sought-after services in Papua New Guinea. The expertise of our Papua New Guinea office cleaners has been honed through a dedication to excellence at the core of our business. As a regular office cleaning service in Papua New Guinea, we understand the urgency of current health threats and the necessity of employing stringent cleaning processes to mitigate risks.</p>

                                <p>We always offer unique solutions tailored to your office cleaning needs in Papua New Guinea. A single strategy does not fit all clients, and applying one method universally would be ineffective. With over a decade in the business, we understand what our customers expect. In terms of office cleaning, we offer the best pricing. Our customers undoubtedly seek the best service, and there is no question about that. Therefore, if someone is to recommend the best service, it should embody the best attributes. Our office cleaning approach is straightforward: you contact us, we conduct an inspection, discuss your needs, and then start working. Office Cleaning Papua New Guinea by Clean Australia Service fulfills its commitments to each and every one of its customers.</p>
                                <h3>What Services Do We Offer for Office Cleaning in Papua New Guinea?</h3>
                                <ul className="details-list">
                                    <li>Vacuuming, scrubbing, and mopping hard floors and surfaces.</li>
                                    <li>Wiping and washing windows and glass doors.</li>
                                    <li>Emptying bins and changing bin liners as part of office cleaning.</li>
                                    <li>Wiping walls and safely removing dirt from switchboards.</li>
                                    <li>Vacuuming and steam cleaning carpets and curtains.</li>
                                    <li>Dusting, cleaning, and wiping desks, cupboards, and drawers.</li>
                                    <li>Scrubbing and disinfecting toilets and pantries.</li>
                                    <li>Cleaning staircases.</li>
                                </ul>
                                <p>Having assisted businesses in maintaining clean offices in Papua New Guinea for years, our service is considered one of the best. We offer a flexible, personalized level of office cleaning solutions to each of our esteemed clients to meet their diverse office cleaning needs in Papua New Guinea.</p>
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
                                <h3>Select the Best Cleaners for Your Office in Papua New Guinea</h3>
                                <p>With our skilled and trained cleaners in Papua New Guinea, we ensure that the job meets the highest standards. Your office will be meticulously attended to, with every detail considered. If you have additional office cleaning concerns, we are open to discussion. We understand that offices often require customized cleaning solutions, and we are prepared to create a plan tailored to your needs. After all, it is your office, and we aim to clean it according to your preferences.</p>

                                <p>Call +675 320 0738 for a free inspection and quotation. Alternatively, you can submit a request online through our contact page. If you're unsure why you should choose us, feel free to check out our customer reviews on Google and Facebook.</p>

                                <p>In addition to office cleaning, we also offer end of lease cleaning and commercial cleaning services.</p>
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