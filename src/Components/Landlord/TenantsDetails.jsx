import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TenantDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tenantType: "",
    ageRange: "",
    employmentStatus: "",
    occupancyType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/landlord/prefrences");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Tenant Type */}
          <div className="mb-4">
            <select
              name="tenantType"
              value={formData.tenantType}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded"
              required
            >
              <option value="">Select Tenant Type</option>
              <option value="Single">Single</option>
              <option value="Couple">Couple</option>
              <option value="Family">Family</option>
              <option value="Student">Student</option>
            </select>
          </div>

          {/* Age Range */}
          <div className="mb-4">
            <select
              name="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded"
              required
            >
              <option value="">Select Age Range</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46+">46+</option>
            </select>
          </div>

          {/* Employment Status */}
          <div className="mb-4">
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded"
              required
            >
              <option value="">Select Employment Status</option>
              <option value="Employed">Employed</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
            </select>
          </div>

          {/* Occupancy Type */}
          <div className="mb-4">
            <select
              name="occupancyType"
              value={formData.occupancyType}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded"
              required
            >
              <option value="">Select Occupancy Type</option>
              <option value="Owner">Owner</option>
              <option value="Renter">Renter</option>
              <option value="Subletting">Subletting</option>
            </select>
          </div>

          {/* Next Button */}
          <button
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

export default TenantDetails;
