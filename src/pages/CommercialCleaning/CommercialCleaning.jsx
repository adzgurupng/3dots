import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import CommercialCleaningImg from "../../assets/images/service/commercialcleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const CommercialCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Commercial Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>Commercial Cleaning Services</li>
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
                                    <img src={CommercialCleaningImg} alt="image" />
                                </div>
                                <h3>About Commercial Cleaning And How Does It Work</h3>
                                <p>Commercial cleaning services in Three Dots with top-notch reviews are available here. If you seek the best cleaning service, you can rely on us. We specialize in catering to commercial entities, whether it's a strata or an office, offering tailored solutions for your cleaning requirements. Our approach to commercial cleaning in Sydney is straightforward: you reach out to us, we conduct an inspection at your premises, discuss your needs, and commence work.</p>

                                <p>We always deliver unique solutions to address specific cleaning needs. Applying a one-size-fits-all approach doesn't suffice in our line of work. With over a decade of experience in the industry, we understand our customers' expectations well. In terms of commercial cleaning in Sydney, we offer competitive pricing. Our clients undoubtedly seek the best cleaning service in Sydney, and we ensure to provide just that. If you're looking for recommendations for the finest service, it should embody the best attributes.</p>
                                <h3>Why Choose Us for Commercial Cleaning Service?</h3>
                                {/* <ul className="details-list">
                                    <li>Mopping and vacuuming hard floors in kitchens, bathrooms, bedrooms, and living areas.</li>
                                    <li>Carpet and upholstery cleaning, including steam and deep cleaning methods.</li>
                                    <li>Dusting and cleaning surfaces, kitchen countertops, cabinets, range hoods, and appliances.</li>
                                </ul> */}
                                <p>Our extensive experience in cleaning various commercial properties has positioned us as the premier service provider in the industry. Whether it's a small office or a large building in Papua New Guinea, we ensure to provide the utmost care for your property. Our commitment to excellence drives us to utilize the finest cleaning products and techniques in our operations. Given that commercial properties require frequent cleaning and are susceptible to wear and tear, we understand the importance of maintaining their longevity.</p>

                                <p>We place great emphasis on preserving the integrity of your commercial property. To ensure that your window glasses, floor tiles, furniture, and other elements remain intact post-cleaning, we adhere to the best practices and procedures. Our goal is to leave nothing behind except the enhanced beauty of your space after our cleaning services.</p>
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
                                <h3>Select the Leading Professional Commercial Cleaners in Papua New Guinea for Your Property</h3>
                                <p>With our skilled and trained cleaners, we consistently deliver work of the highest standards. Your office will receive meticulous attention to every detail. Should you have any additional concerns regarding office cleaning, we're open to discussion. We understand that offices often require customized cleaning solutions, and we're prepared to tailor our services accordingly. Ultimately, it's your office, and we strive to clean it according to your preferences.</p>

                                <p>Reach out to us at +675 320 0738 for a free inspection and quotation. Alternatively, you can submit a request online through our contact page. If you're unsure why you should choose us, feel free to check out our customer reviews on Google and Facebook.</p>

                                <p>In addition to office cleaning, we also offer end of lease cleaning services.</p>
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

export default CommercialCleaning;