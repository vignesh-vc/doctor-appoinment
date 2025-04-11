import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaCalendarAlt, FaClock, FaHome } from 'react-icons/fa';
import docter from "../assests/R.png"
const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {/* Top Doctor Section */}
      <div className="max-w-6xl mx-auto border-b pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Doctor Info */}
          <div className="flex items-center gap-4">
            <img
              src={docter}
              alt="Dr. B M Suraj"
              className="w-24 h-24 rounded-full border-4 border-green-500"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              Dr. Wayne R. Kotzker<span className="text-green-600">✔</span>
              </h2>
              <p className="text-sm text-gray-600">NEPHROLOGIST</p>
              <button className="mt-1 text-blue-600 text-sm underline">VIEW PROFILE</button>
            </div>
          </div>

          {/* Google Rating */}
          <div className="flex flex-col items-center">
            <p className="text-blue-600 font-bold text-lg">5.0</p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <p className="text-xs text-gray-500">Google Rating</p>
          </div>
        </div>

        {/* Appointment Summary */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Appointment Summary</h3>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Part */}
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <FaHome className="text-xl" />
              <div>
                <p>In-Clinic Consultation</p>
                <p className="text-sm text-green-600">Fees : Pay at clinic</p>
              </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-wrap items-center gap-6 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>6:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>11-04-2025</span>
              </div>
              <button className="text-blue-600 underline">Change Date & Time</button>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="mt-10 max-w-xl mx-auto">
        <form
          action="https://formsubmit.co/ceit58vignesh24@gmail.com"
          method="POST"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
          <input type="hidden" name="Doctor Name" value="Dr. Wayne R. Kotzker" />
          <input type="hidden" name="Specialization" value="NEPHROLOGIST" />
          <input type="hidden" name="Clinic Address" value="Apollo Clinic, Bangalore" />

          <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Full Name *</label>
            <input type="text" name="Name" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Date of Birth *</label>
            <input type="date" name="Date of Birth" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Mobile No *</label>
            <input type="tel" name="Mobile" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Email *</label>
            <input type="email" name="Email" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Address *</label>
            <input type="text" name="Address" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Preferred Date *</label>
            <input type="date" name="Appointment Date" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">Preferred Time *</label>
            <input type="time" name="Appointment Time" required className="w-full border px-3 py-2 rounded" />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
