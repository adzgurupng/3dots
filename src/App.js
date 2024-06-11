import './App.css';
import './assets/css/custom.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/flaticon.css';
import "@flaticon/flaticon-uicons/css/all/all.css";
import './assets/css/odometer-theme-default.css';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contactus/Contactus';
import Blog from "./pages/Blog/Blog";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import Services from "./pages/Services/Services";
import HouseCleaning from "./pages/HouseCleaning/HouseCleaning";
import CommercialCleaning from "./pages/CommercialCleaning/CommercialCleaning";
import ApartmentCleaning from './pages/ApartmentCleaning/ApartmentCleaning';
import OfficeCleaning from "./pages/OfficeCleaning/OfficeCleaning";
import CarpetCleaning from './pages/CarpetCleaning/CarpetClening';
import MobileCar from "./pages/MobileCarDetailing/MobileCarDetailing";
 import BlogDetails1 from "./pages/Blog/BlogDetails1";
 import BlogDetails2 from "./pages/Blog/BlogDetails2";
 import BlogDetails3 from "./pages/Blog/BlogDetails3";
 import BlogDetails4 from "./pages/Blog/BlogDetails4";
 import BlogDetails5 from "./pages/Blog/BlogDetails5";
 import BlogDetails6 from "./pages/Blog/BlogDetails6";
// import BookAService from "././components/Home/BookAService";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/house-cleaning" element={<HouseCleaning />} />
            <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
            <Route path="/apartment-cleaning" element={<ApartmentCleaning />} />
            <Route path="/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
            <Route path="/car-cleaning" element={<MobileCar />} />
            <Route path="/blog-details-1" element={<BlogDetails1 />} />
            <Route path="/blog-details-2" element={<BlogDetails2 />} />
            <Route path="/blog-details-3" element={<BlogDetails3 />} />
            <Route path="/blog-details-4" element={<BlogDetails4 />} />
            <Route path="/blog-details-5" element={<BlogDetails5 />} />
            <Route path="/blog-details-6" element={<BlogDetails6 />} />
            {/* <Route path="/car-cleaning" element={<BookAService />} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
