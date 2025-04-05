import React from "react";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";




const treatments = [
  {
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Cardiology",
    description:
      "Get top-notch cardiac care with advanced diagnostics and compassionate treatment."
  },
  {
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Pharmacy Support",
    description:
      "Comprehensive pharmaceutical care and consultation tailored to your health needs."
  },
  {
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "General Checkups",
    description:
      "Routine health checkups to keep you in top condition all year round."
  }, {
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Cardiology",
    description:
      "Get top-notch cardiac care with advanced diagnostics and compassionate treatment."
  },
  {
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Pharmacy Support",
    description:
      "Comprehensive pharmaceutical care and consultation tailored to your health needs."
  },
  {
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "General Checkups",
    description:
      "Routine health checkups to keep you in top condition all year round."
  }
];

const TreatmentSection = () => {
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/treatments");
  };
  return (
    <section className="bg-gradient-to-r from-[#00CC99] to-[#336699] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Our Treatments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{item.description}</p>
              <button
                onClick={handleNavigate}
                className="flex items-center justify-between w-full border border-gray-200 rounded-full py-2 px-4 group hover:bg-[#f4ebff] transition"
              >
                <span className="text-sm font-medium text-gray-900">Explore</span>
                <span className="ml-auto w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:rotate-[-90deg] group-hover:text-white transition">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Final Centered Button with Hover Rotation and Navigation */}
        <div className="flex justify-center mt-10">
          <Link
            to="/treatments"
            className="flex items-center justify-between border border-white rounded-full py-3 px-6 bg-white hover:bg-opacity-90 transition group"
          >
            <span className="text-base font-medium text-gray-900">
              View All Treatments
            </span>
            <span className="ml-3 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-90deg] hover:bg-purple-600 hover:text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
