import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faPlus, faMinus, faSearch, faTimes, } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link  } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const [isIconMinus, setIsIconMinus] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubMenu1, setOpenSubMenu1] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isActive1, setIsActive1] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleClass = () => {
    setIsActive(!isActive);
    
  };
  // const toggleSubmenu = () => {
  //   setIsOpen1(!isOpen1);
  //   setIsIconMinus(!isIconMinus);
  // };
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
    
  // };

  const toggleVisibility = () => {
    setIsVisible1(!isVisible1);
    // setIsVisible2(!isVisible2);
    setIsExpanded1(!isExpanded1);
    // setIsExpanded2(!isExpanded1);
  };
  const toggleVisibility2 = () => {
    //setIsVisible1(!isVisible1);
    setIsVisible2(!isVisible2);
    setIsExpanded2(!isExpanded2);
    //setIsExpanded1(!isExpanded1);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 991) {
        setOpenSubMenu(null); // Close sub-menu when window width is greater than or equal to 991px
        setOpenSubMenu1(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const toggleMenu = () => {
    // setIsOpen(!isOpen);
    setIsOpen1(!isOpen1);
    // setIsOpen2(!isOpen2);
    //console.log('Menu toggled');
  };

  const toggleMenu2 = () => {
     setIsOpen(!isOpen);
    // // setIsOpen1(!isOpen1);
    // setIsOpen2(!isOpen2);
    //console.log('Menu toggled');
  };
  // const scrollBottom = e => {
  //   e.current.scrollIntoView({
  //     behavior: "smooth"
  //   });
  // };
  const handleClick = () => {
    toggleMenu();
    window.scrollTo(0, 0);
  };

  const handleClick2 = () => {
    toggleMenu2();
    window.scrollTo(0, 0);
  };
    return (

       
        <>
            <section className='header'>
            <div className="topbar">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="topbar-left-side">
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+675 320 0738">+675 320 0738

                            </a></li>
                            <li><FontAwesomeIcon icon={faClock} /> Mon To Fri 9:00am To 6:00pm</li>
                        </ul>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="topbar-left-side right_side">
                        <ul>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> <a
                                    href="https://maps.app.goo.gl/mgYi2Cc8ypf42iv56">Level 6 Avara Annex Brampton Street Granville Port Moresby</a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>


    <div className=  {isSticky ? 'header-area sticky' : 'header-area'}>
        <div className="navbar-area">

            <div className="main-responsive-nav">
                <Container>
                    <div className="mobile-nav">
                        <a href="/" className="logo">
                            <img className="black-logo" src={Logo} alt="logo" />
                            {/* <img className="white-logo" src="assets/images/white-logo.png" alt="logo" /> */}
                        </a>
                        {/* <ul className="menu-sidebar menu-small-device">
                            <li><button className="popup-button"><FontAwesomeIcon icon={faSearch } /></button></li>
                        </ul> */}
                    </div>
                </Container>
            </div>

            <div className="main-nav">
                <Container>
                    <nav className="navbar navbar-expand-md navbar-light">
                        <NavLink className="navbar-brand" to="/"  onClick={() => window.scrollTo(0, 0)}>
                            <img className="black-logo" src={Logo} alt="logo" />
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleClass}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={isActive ? "collapse_menu active" : "collapse_menu"}>
                            <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink onClick={handleClick} className={`nav-link has-sub-menu ${isOpen1 ? 'active' : ''}`} to="/services"
                            id="navbarDropdown"
                            role="button"
                            //onClick={() => window.scrollTo(0, 0)}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                                    Services </NavLink>
                                    <span id="icon" className="ct-menu-toggle" onClick={toggleVisibility}><FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} /></span>
                                    <ul className={`dropdown-menu submenu ${isVisible1 ? 'visible' : 'hidden'}`}>
                                    <NavLink className="dropdown-item" to="/house-cleaning" onClick={() => window.scrollTo(0, 0)}>House Cleaning</NavLink>
                                    <NavLink className="dropdown-item" to="/commercial-cleaning" onClick={() => window.scrollTo(0, 0)}>Commercial Cleaning</NavLink>

                                    <NavLink className="dropdown-item" to="/apartment-cleaning" onClick={() => window.scrollTo(0, 0)}>Apartment Cleaning</NavLink>
                                    <NavLink className="dropdown-item" to="/office-cleaning" onClick={() => window.scrollTo(0, 0)}>Office Cleaning</NavLink>
                                    <NavLink className="dropdown-item" to="/carpet-cleaning" onClick={() => window.scrollTo(0, 0)}>Carpet Cleaning</NavLink>
                                    <NavLink className="dropdown-item" to="/car-cleaning" onClick={() => window.scrollTo(0, 0)}>Mobile Car Detailing</NavLink>
                                    </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink onClick={handleClick2} className={`nav-link has-sub-menu ${isOpen ? 'active' : ''}`} to="javascript:void(0);"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                                    Company Profile  </NavLink>
                                    <span id="icon" className="ct-menu-toggle" onClick={toggleVisibility2}><FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} /></span>
                                    <ul className={`dropdown-menu submenu ${isVisible2 ? 'visible1' : 'hidden1'}`}>
                                    <NavLink className="dropdown-item" to="/about-us" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                                    <NavLink className="dropdown-item" to="/gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</NavLink>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
                            </li>
                            </ul>
                            
                        </div>
                        <div className="menu-sidebar menu-sidebar-1">
                                <ul>
                                    {/* <li><button className="popup-button" onClick={showPopup}><FontAwesomeIcon icon={faSearch } /></button></li> */}
                                    <li>
                                      {/* <a  className="default-button default-button-3" href='#' onClick={() => scrollToSection('bookAServices')}><span>Get A Free Quote</span></a > */}
                                    
                                    <HashLink className="default-button default-button-3" smooth to='/#bookAServices' > <span>Get A Free Quote</span> </HashLink>
                                    
                                    
                                    </li>
                                </ul>
                            </div>
                    </nav>
                </Container>
            </div>
        </div>
    </div>




    <div className="popup" >
        <div className={`popup-content ${isPopupVisible ? 'hi' : ''}`}>
            <button className="close-btn" id="popup-close"  onClick={hidePopup}><FontAwesomeIcon icon={faTimes} /></button>
            <form>
                <div className="input-group search-box">
                    <input type="text" className="form-control" placeholder="Search" />
                    <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
        </div>
    </div>
            </section>

        
        
        </>
    );
};

export default Header;