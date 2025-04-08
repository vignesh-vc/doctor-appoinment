import React from "react";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const treatments = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Thyroid Disease",
    description:
      "Get butterflies, not butterfly gland diseases",
  },
  {
    id: 2,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Heart Problems",
    description:
      "Don’t let your heart fail!",
  },
  {
    id: 3,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "B.P. Management",
    description:
      "Control your blood pressure",
  },
  {
    id: 4,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Respiratory Problems",
    description:
      "Breathe in a better quality of life",
  },
  {
    id: 5,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Migraine",
    description:
      "Migraine : It's not just a headache",
  },
  {
    id: 6,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Pain Management",
    description:
      "Because you deserve a pain-free life",
  },
  {
    id: 7,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Gastric Disorders",
    description:
      "There might be more to that “tummy pain”",
  },
  {
    id: 8,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Diabetes Management",
    description:
      "Diabetes care in a multidisciplinary setting",
  },
  {
    id: 9,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Infectious Diseases",
    description:
      "Stop the spread!",
  },
  {
    id: 10,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Vaccination And Check-up",
    description:
      "Trap the root cause",
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

      <div className="grid md:grid-cols-4 gap-6">
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
