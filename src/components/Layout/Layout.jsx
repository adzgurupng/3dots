import React from 'react';
//import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Layout = ({ children }) => {
  //const location = useLocation();

  return (
    <div className="main-parts">
      <Header />
      <main>
        {children}
      </main>
     <Footer />
    </div>
  );
};

export default Layout;