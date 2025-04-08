import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import doctorImage from "../assests/R.png"; // ✅ Ensure the path is correct
import TestimonialCarousel from "../components/Testimonial Carousel";
import HomeAbout from "../components/HomeAbout";
import StateCards from "../components/StateCards";
import FaqSection from "../components/FaqSection";
import HomeTreatment from "../components/HomeTreatment"
import ClinicInfo from "../components/ClinicInfo";
import HomeBlogSection from "../components/HomeBlogSection"
const DoctorCard = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>

      <div className="flex items-center justify-center min-h-[750px] w-full p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">

          {/* 🏥 Doctor Image & Info */}
          <div className="flex flex-col items-center md:w-1/2 text-center px-6">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-green-500"
            />
            <h2 className="text-xl md:text-2xl font-semibold mt-4">Dr.Wayne R. Kotzker </h2>
            <p className="text-gray-500 text-sm md:text-base">NEPHROLOGIST</p>
            <p className="text-gray-500 text-sm md:text-base"> MD</p>
            <p className="text-gray-500 text-sm md:text-base"> Medical License, Florida:ME88119 - 2003 - Present</p>
            <p className="text-gray-500 text-sm md:text-base"> DEA:BK4938645 - 1995 - Present</p>
            <Link
              to="/booking"
              className="text-white px-6 py-3 mt-4 rounded-lg text-lg font-medium border-2 transition duration-[1000ms]"
              style={{
                fontWeight: "bold",
                backgroundColor: "#336699",
                borderColor: "#336699",
                transition: "background-color 1s, color 1s, border-color 1s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#336699";
                e.target.style.borderColor = "#336699";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#336699";
                e.target.style.color = "white";
                e.target.style.borderColor = "#336699";
              }}
            >
              Booking Appointment
            </Link>


          </div>

          {/* 📅 Appointment Section */}
          <div className="flex flex-col items-center md:w-1/2 w-full">

            {/* ✅ Heading outside the box */}
            <h1 className="text-xl md:text-2xl font-bold text-center mb-2">
              Book a Clinic Appointment
            </h1>

            {/* 📅 Appointment Info Box */}
            <div
              className="bg-white p-6 rounded-lg border border-gray-200 w-full relative overflow-visible"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
            >
              {/* ✅ Availability */}
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-green-600 text-2xl">⏳</span>
                <p className="text-base">
                  Next Available at <span className="text-green-600 font-semibold">6:45 PM, Today</span>
                </p>
              </div>

              {/* 📍 Address */}
              <div className="flex items-start gap-3 mt-4 text-gray-700 text-base">
                <span className="text-green-600 text-2xl">📍</span>
                <p>
                ADDRESS: 670Glades Rd, Suite 110 Boca Raton, FL 33431   </p>
              </div>

              {/* 🔽 Divider */}
              <hr className="my-6 border-gray-300" />

              {/* 🏥 Booking Button */}
              <div className="text-center">
                <button className="text-green-600 font-semibold text-xl hover:underline">
                  Book Clinic Visit
                </button>
                <p className="text-sm text-gray-500">No Booking Fee</p>
              </div>

              {/* 🌊 Wave SVG (Absolute Positioning) */}
              <div className="relative w-full overflow">
                <svg

                  className="text-[#336699] absolute -bottom-0 top-3 left-0 w-full z-[-1] max-h-[420px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,128L120,133.3C240,139,480,149,720,138.7C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 bg-gray-50 w-full  flex flex-col items-center justify-center bg-gray-50">
        <StateCards />
      </div>
      <HomeAbout />
      <TestimonialCarousel />
      <HomeTreatment />
      <ClinicInfo />
      <HomeBlogSection />
      <FaqSection />
    </>
  );

};

export default DoctorCard;
