import React from 'react';
import { Link } from 'react-router-dom';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = () => {
  return (
    <div>
      <div className="uni-banner">
        <div className="container">
          <div className="uni-banner-text">
            <h1>Contact</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-page ptb-100">
        <div className="container">
          <div className="default-section-title">
            <h6>SEND MESSAGE</h6>
            <h3>We Are Here To Help You</h3>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="contact-card-area">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="contact-card">
                        <i className="fas fa-map-marker-alt"> <FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                        <h4>Our Location</h4>
                        <p> Level 6 Avara Annex Brampton Street Granville Port Moresby</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="contact-card">
                        <i className="fas fa-phone-alt">   <FontAwesomeIcon icon={faPhoneAlt} /></i>
                        <h4>Our Phone</h4>
                        <p><a href="tel:+675 320 0738">+675 320 0738</a></p>
                        {/* <p><a href="tel:44587154767">+44 587 154767</a></p> */}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="contact-card">
                        <i className="far fa-envelope"> <FontAwesomeIcon icon={faEnvelope} /></i>
                        <h4>Our Email</h4>
                        <p><a href="mailto:reachus@domain.com">reachus@domain.com</a></p>
                        {/* <p><a href="mailto:[email&#160;protected]">[email&#160;protected]</a></p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="contact-page-form-area">
                  <div className="contact-form bd-form details-text-area">
                    <h2>Send Your Message</h2>
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name here" required data-error="Please enter your name" />
                            <div className="help-block with-errors"></div>
                            <i className="ri-user-3-line"></i>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email address here" required data-error="Please enter your email" />
                            <div className="help-block with-errors"></div>
                            <i className="ri-mail-send-line">    </i>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number" className="form-control" required data-error="Please enter your number" />
                            <div className="help-block with-errors"></div>
                            <i className="ri-phone-line"></i>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="write subject" required data-error="Please enter your subject" />
                            <div className="help-block with-errors"></div>
                            <i className="ri-booklet-line"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Enter your comment here" required data-error="Write your message"></textarea>
                            <div className="help-block with-errors"></div>
                            <i className="ri-pencil-line"></i>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <button className="default-button" type="submit"><span>Send Message</span></button>
                          <div id="msgSubmit" className="h3 text-center hidden"></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     

      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3381434388034!2d147.15014487383732!3d-9.479288699421865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69023109f743044b%3A0xfbc3023d81e95570!2sAvara%20Annex%20Building!5e0!3m2!1sen!2sin!4v1717325541521!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
