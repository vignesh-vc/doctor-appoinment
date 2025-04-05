import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import TestimonialCarousel from "./components/Testimonial Carousel";
import StateCards from "./components/StateCards"; // ✅ Import StateCards
import Loader from "./ui/Loader"; // ✅ Import Loader
import AboutMe from "./pages/About";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
       
        <Route path="/treatments" element={loading ? <Loader /> : <Treatments />} />
        <Route path="/about" element={loading ? <Loader /> : <About />} />
        <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
      </Routes>

      



      <Footer />
    </Router>
  );
}

export default App;
