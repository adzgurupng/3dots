// import React from 'react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Fancybox from '../Fancybox.js';
import P1 from "../../assets/images/portfolio/p1.jpg";
import P2 from "../../assets/images/portfolio/p2.jpg";
import P3 from "../../assets/images/portfolio/p3.jpg";
import P4 from "../../assets/images/portfolio/p4.jpg";
import P5 from "../../assets/images/portfolio/p5.jpg";
import P6 from "../../assets/images/portfolio/p6.jpg";
const GalleryPortfolio = () => {
    const linkRef = useRef(null);
    const handleGalleryClick = () =>{
        if (linkRef.current) {
            linkRef.current.click();
          }
    }

    const linkRef1 = useRef(null);
    const handleGalleryClick1 = () =>{
        if (linkRef1.current) {
            linkRef1.current.click();
          }
    }

    const linkRef2 = useRef(null);
    const handleGalleryClick2 = () =>{
        if (linkRef2.current) {
            linkRef2.current.click();
          }
    }

    const linkRef3 = useRef(null);
    const handleGalleryClick3 = () =>{
        if (linkRef3.current) {
            linkRef3.current.click();
          }
    }

    const linkRef4 = useRef(null);
    const handleGalleryClick4 = () =>{
        if (linkRef4.current) {
            linkRef4.current.click();
          }
    }

    const linkRef5 = useRef(null);
    const handleGalleryClick5 = () =>{
        if (linkRef5.current) {
            linkRef5.current.click();
          }
    }
    return (
        <>
            <div className="portfolio ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR GALLERY</h6>
                        <h3>Our Photo Gallery</h3>
                    </div>
                    <div className="section-content">
                        <Row>
                        <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                            }}
                        >
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick}>
                                    
                                        
                                    <a data-fancybox="gallery" ref={linkRef} href={P1} className='fancy_gallery'>
                                        <img
                                            alt=""
                                            src={P1}
                                            width="200"
                                            height="150"
                                        />
                                    
                                        <div className="portfolio-text">
                                            <p>House Cleaning</p>
                                            <h4><a href="service-details.html">Commercial Kitchen</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick1}>
                                <a data-fancybox="gallery" ref={linkRef1} href={P2} className='fancy_gallery'>
                            
                                    <img src={P2} alt="image" width="200"
                                            height="150"/>
                                        <div className="portfolio-text">
                                            <p>Commercial Cleaning</p>
                                            <h4><a href="servvice-details.html">Manufacturing Floor</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick2}>
                                <a data-fancybox="gallery" ref={linkRef2} href={P3} className='fancy_gallery'>
                                    <img src={P3} alt="image" width="200"
                                            height="150"/>
                                        <div className="portfolio-text">
                                            <p>Apartment Cleaning</p>
                                            <h4><a href="service-details.html">Office Floor</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick3}>
                                <a data-fancybox="gallery" ref={linkRef3} href={P4} className='fancy_gallery'>
                                    <img src={P4} alt="image" width="200"
                                            height="150"/>
                                        <div className="portfolio-text">
                                            <p>Office Cleaning</p>
                                            <h4><a href="service-details.html">Office Table</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick4}>
                                <a data-fancybox="gallery" ref={linkRef4} href={P5} className='fancy_gallery'>
                                    <img src={P5} alt="image" width="200"
                                            height="150"/>
                                        <div className="portfolio-text">
                                            <p>Carpet Cleaning</p>
                                            <h4><a href="service-details.html">Home Carpet Cleaning</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="portfolio-card" onClick={handleGalleryClick5}>
                                <a data-fancybox="gallery" ref={linkRef5} href={P6} className='fancy_gallery'>
                                    <img src={P6} alt="image" width="200"
                                            height="150"/>
                                        <div className="portfolio-text">
                                            <p>Mobile Car Detailing</p>
                                            <h4><a href="service-details.html">Car Cleaning</a></h4>
                                        </div>
                                        </a>
                                </div>
                            </Col>
                            </Fancybox>
                        </Row>
                        {/* <a className="mt-30 default-button default-button-3 pag-btn" href="gallery.html"><span>Load More</span></a> */}
                    </div>
                </div>
            </div>
        </>

    );
};

export default GalleryPortfolio;