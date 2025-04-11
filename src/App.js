import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./ui/Loader";

// Pages
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";  // ✅ Import Single Blog Detail page
import TreatmentDetail from "./pages/TreatmentDetail";
import Articles from "./pages/Articles";
import AppointmentPage from "./pages/AppointmentPage";
import ThankYou from "./components/ThankYou";

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
        <Route path="/treatment/:id" element={loading ? <Loader /> : <TreatmentDetail />} />

        <Route path="/aboutme" element={loading ? <Loader /> : <About />} />
        <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />

        {/* ✅ New Blog Routes */}
        {/* <Route path="/all-blogs" element={<AllBlogs />} /> */}
        <Route path="/blog/:id" element={loading ? <Loader /> : <BlogDetail />} />
        <Route path="/articles" element={loading ? <Loader /> : <Articles />} />
        <Route path="/booking" element={loading ? <Loader /> : <AppointmentPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
