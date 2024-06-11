import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Logo from "../../images/logo.png";
// import Navbar from "../Home/NavBar";
import { Container, Col, Row } from 'react-bootstrap';
import Banner from "../../components/Home/Banner";
import AboutUs from "../../components/Home/AboutUs";
import Services from "../../components/Home/Services";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import BookAService from "../../components/Home/BookAService";
import Testimonial from "../../components/Home/Testimonial";
// import OurTeam from "../../components/Home/OurTeam";
import OurBlog from "../../components/Home/Blog";
import NewsLetter from "../../components/Home/NewsLetter";
const Home = () => {
    const scrollRef = useRef()
    // const wishlistCount = useSelector(selectWishlistCount);
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpanded = () => {
    //   setIsExpanded(!isExpanded);
    // };
    return (
        <>
        <div ref={scrollRef}>
            <Banner />
        </div>
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <BookAService/>
        <Testimonial />
        {/* <OurTeam /> */}
        <OurBlog />
        <NewsLetter />
        </>

        );
};

export default Home;