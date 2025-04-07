import React from "react";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const treatments = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Cardiology",
    description: "Get top-notch cardiac care with advanced diagnostics and compassionate treatment.",
    image: "https://pagedone.io/asset/uploads/1696244059.png",
  },
  {
    id: 2,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Pharmacy Support",
    description: "Comprehensive pharmaceutical care and consultation tailored to your health needs.",
    image: "https://pagedone.io/asset/uploads/1696244074.png",
  },
  {
    id: 3,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "General Checkups",
    description: "Routine health checkups to keep you in top condition all year round.",
    image: "https://pagedone.io/asset/uploads/1696244095.png",
  }, {
    id: 4,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Cardiology",
    description: "Get top-notch cardiac care with advanced diagnostics and compassionate treatment.",
    image: "https://pagedone.io/asset/uploads/1696244059.png",
  },
  {
    id: 5,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Pharmacy Support",
    description: "Comprehensive pharmaceutical care and consultation tailored to your health needs.",
    image: "https://pagedone.io/asset/uploads/1696244074.png",
  },
  {
    id: 6,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "General Checkups",
    description: "Routine health checkups to keep you in top condition all year round.",
    image: "https://pagedone.io/asset/uploads/1696244095.png",
  }
];

const Treatments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const handleExplore = (id) => {
    navigate(`/treatment/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#336699] mb-10">
        All Treatments
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-left"
          >
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 mb-4">
              {treatment.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {treatment.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">{treatment.description}</p>
            <button
              onClick={() => handleExplore(treatment.id)}
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
    </div>
  );
};

export default Treatments;
