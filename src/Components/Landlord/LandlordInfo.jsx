import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandlordInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: "",
    dob: "",
    nationality: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the correct landlord property route
    navigate("/landlord/propertydetails");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="dob"
              placeholder="D.O.B"
              value={formData.dob}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
          >
            Next
          </button>
        </form>
        <p className="mt-6 text-center">
          Set up later?{" "}
          <a
            href="/landlord/propertydetails"
            className="text-teal-600 font-semibold"
          >
            Skip
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandlordInfo;
