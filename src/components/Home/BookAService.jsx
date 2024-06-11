import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import A3 from "../../assets/images/about/a3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const BookAServices = () => {
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
            <div className="booking booking-3" id='bookAServices'>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="booking-form-area booking-form-area-3">
                                <div className="booking-form-content-3">
                                    <div className="default-section-title default-section-title-middle">
                                        <h3>Book A Service</h3>
                                    </div>
                                    <form>
                                        <Row>
                                            <Col lg="6" md="6" sm="6">
                                                <div className="booking-form-content">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                            </Col>
                                            <Col lg="6" md="6" sm="6">
                                                <div className="booking-form-content">
                                                    <input type="Email" className="form-control" placeholder="Email Address" />
                                                </div>
                                            </Col>

                                            <Col lg="6" md="6" sm="6">
                                                <div className="booking-form-content">
                                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                                </div>
                                            </Col>
                                            <Col lg="6" md="6" sm="6">
                                                <div className="booking-form-content">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected disabled>Choose A Service</option>
                                                        <option value="1">House Cleaning</option>
                                                        <option value="2">Commercial Cleaning</option>
                                                        <option value="3">Apartment Cleaning</option>
                                                        <option value="4">Office Cleaning</option>
                                                        <option value="5">Carpet Cleaning</option>
                                                        <option value="6">Mobile Car Detailing</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col lg="12" md="12" sm="12">
                                                <div className="booking-form-content">
                                                    <textarea className="form-control booking-text" rows="20" placeholder="Certainly! Could you please clarify what specific aspect of the work you'd like to know more about?(Optional)"></textarea>
                                                </div>
                                            </Col>
                                            <Col lg="12" md="12" sm="12">
                                                <div className="booking-form-content text-center">
                                                    <button className="default-button" type="submit"><span>Submit
                                                        Details</span></button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <div className="col-lg-6">
                            {/* <!-- <div className="booking-play-button">
                        <div className="play-button">
                            <a className="video-popup" href="https://www.youtube.com/watch?v=0qNsC-NLuhM"><i
                                    className="flaticon-play-button"></i></a>
                        </div>
                    </div> --> */}
                        </div>
                    </Row>
                </Container>
            </div>

        </>


    );
};

export default BookAServices;