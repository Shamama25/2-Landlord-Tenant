import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandlordPropertyDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: "",
    style: "",
    bedrooms: "",
    receptions: "",
    bathrooms: "",
    heatingType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/landlord/property");
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
              type="text"
              name="style"
              placeholder="Style"
              value={formData.style}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="bedrooms"
              placeholder="Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="receptions"
              placeholder="Receptions"
              value={formData.receptions}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="bathrooms"
              placeholder="Bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="heatingType"
              placeholder="Heating Type"
              value={formData.heatingType}
              onChange={handleChange}
              className="w-full h-10 p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandlordPropertyDetails;
