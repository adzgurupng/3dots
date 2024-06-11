import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import MobileCar from "../../assets/images/service/mobilecarcleaning.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const CarCleaning = () => {
    return (
        <>
            <div className="uni-banner service">
                <div className="container">
                    <div className="uni-banner-text">
                        <h1>Mobile Car Cleaning Services</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li>Mobile Car Cleaning Services</li>
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
                                    <img src={MobileCar} alt="image" />
                                </div>
                                <h3>About Mobile Car Cleaning And How Does It Work</h3>
                                <p>Mobile Car Detailing offers a variety of fantastic car cleaning and detailing packages available throughout Papua New Guinea. Customer satisfaction is our top priority at Car Detailing. We are committed to delivering outstanding car cleaning services and exceptional customer service, ensuring 100% satisfaction guaranteed!</p>

                                <p>Our team of expert car detailers is fully qualified, backed by $10 million Public Liability Insurance, and holds current police-checked accreditations. This ensures that you can feel confident and have peace of mind leaving your vehicle in our capable and trusted hands.</p>
                                <h3>Our Mobile Car Cleaning Service Includes:</h3>
                                <ul className="details-list">
                                    <li><b>Exterior Wash:</b> This involves cleaning the exterior surfaces of the vehicle, including the body, windows, tires, and rims. It may include hand washing or pressure washing, depending on the level of service.</li>
                                    <li><b>Interior Vacuuming:</b> Vacuuming the interior of the vehicle to remove dust, dirt, and debris from carpets, seats, floor mats, and other surfaces.</li>
                                    <li><b>Interior Detailing:</b> This involves thorough cleaning and detailing of the interior surfaces, such as dashboard, door panels, center console, and upholstery. It may include spot cleaning, stain removal, and conditioning of leather or fabric surfaces.</li>
                                    <li><b>Window Cleaning:</b> Cleaning and polishing the interior and exterior surfaces of windows and mirrors for improved visibility..</li>
                                    <li><b>Wheel and Tire Cleaning:</b> Cleaning and degreasing the wheels and tires to remove brake dust, dirt, and grime.</li>
                                    <li><b>Waxing and Polishing:</b> Applying wax or polish to the exterior paint surface to protect it from the elements and restore shine.</li>
                                    <li><b>Odor Removal:</b> Using specialized techniques and products to eliminate odors from the interior of the vehicle, such as smoke, pet odors, or food smells.</li>
                                    <li><b>Engine Bay Cleaning:</b> Cleaning and degreasing the engine bay to remove dirt, grease, and grime buildup.</li>
                                    <li><b>Additional Services:</b> Depending on the service provider, additional services such as headlight restoration, paint protection treatments, or scratch removal may also be offered.</li>
                                </ul>
                                <p>Mobile car cleaning services typically encompass a range of offerings aimed at providing convenient and efficient cleaning solutions for vehicles. </p>
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
                                {/* <h3>Choose the best Carpet Cleaners in Papua New Guinea</h3>
                                <p>Our carpet cleaning service is entirely eco-friendly and highly effective at removing trapped dirt and germs from your carpet. Our trained and highly qualified carpet cleaners in Papua New Guinea delicately handle every aspect of cleaning and treat your home as if it were our own. For added value, our carpet steam cleaning service can be combined with rug cleaning.</p>

                                <p>At Three Dots Cleaning Service, quality is always paramount. Our customer satisfaction is our most valuable asset. We prioritize understanding our customers' needs and preferences before beginning any work. We believe that even minor details can make a significant difference, which is why we engage in thorough communication with our customers to ensure their complete satisfaction. Once an agreement is reached, we commence the work, consistently delivering top-notch results. This commitment to excellence is why we are considered the best in Papua New Guinea.</p> */}

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

export default CarCleaning;