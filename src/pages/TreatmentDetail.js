import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { useEffect } from "react";
const treatments = [
  {
    id: 1,
    title: "Cardiology",
    description: "Get top-notch cardiac care with advanced diagnostics and compassionate treatment.",
    icon: <FaHeartbeat className="text-white text-xl" />,
    image: "https://pagedone.io/asset/uploads/1696244059.png",
  },
  {
    id: 2,
    title: "Pharmacy Support",
    description: "Comprehensive pharmaceutical care and consultation tailored to your health needs.",
    icon: <FaCapsules className="text-white text-xl" />,
    image: "https://pagedone.io/asset/uploads/1696244074.png",
  },
  {
    id: 3,
    title: "General Checkups",
    description: "Routine health checkups to keep you in top condition all year round.",
    icon: <FaStethoscope className="text-white text-xl" />,
    image: "https://pagedone.io/asset/uploads/1696244095.png",
  },{
      id: 4,
      icon: <FaHeartbeat className="text-white text-xl" />,
      title: "Cardiolo",
      description:
        "Get top-notch cardiac care with advanced diagnostics and compassionate treatment.",
    },
    {
      id: 5,
      icon: <FaCapsules className="text-white text-xl" />,
      title: "Pharmacy Support",
      description:
        "Comprehensive pharmaceutical care and consultation tailored to your health needs.",
    },
    {
      id: 6,
      icon: <FaStethoscope className="text-white text-xl" />,
      title: "General Checkups",
      description:
        "Routine health checkups to keep you in top condition all year round.",
    },
];

const TreatmentDetail = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const treatment = treatments.find((t) => t.id === parseInt(id));

  if (!treatment) {
    return <div className="text-center py-20 text-red-500">Treatment not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 underline"
      >
        ← Back
      </button>
      <img src={treatment.image} alt={treatment.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h2 className="text-3xl font-bold mb-2">{treatment.title}</h2>
      <p className="text-gray-700 leading-relaxed mt-4">{treatment.description}</p>
    </div>
  );
};

export default TreatmentDetail;
