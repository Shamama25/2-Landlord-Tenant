import React, { useState } from "react";

const TenantsProperties = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    tenantType: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    propertyType: false,
    tenantType: false,
    address: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validation logic
    const newErrors = {
      propertyType: formData.propertyType.trim() === "",
      tenantType: formData.tenantType.trim() === "",
      address: formData.address.trim() === "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);

    if (isValid) {
      alert("Viewing properties..."); // Replace this with actual navigation or functionality
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="text-center">
        {/* Icon container */}
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full">
            <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
          </div>
        </div>
        {/* Title */}
        <h3 className="text-gray-700 text-lg mb-6 text-left">
          What are you interested in?
        </h3>
        {/* Form Container */}
        <div className="flex flex-col items-center space-y-4">
          {/* Property Type Field */}
          <input
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`w-96 h-14 border p-4 rounded-md ${
              errors.propertyType ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Property Type"
          />
          {errors.propertyType && (
            <p className="text-red-500 text-sm">Property type is required.</p>
          )}

          {/* Tenant Type Field */}
          <input
            name="tenantType"
            value={formData.tenantType}
            onChange={handleChange}
            className={`w-96 h-14 border p-4 rounded-md ${
              errors.tenantType ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tenant Type"
          />
          {errors.tenantType && (
            <p className="text-red-500 text-sm">Tenant type is required.</p>
          )}

          {/* Address Field */}
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-96 h-14 border p-4 rounded-md ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">Address is required.</p>
          )}

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-96 bg-[#009688] h-12 text-white py-2 px-4 rounded-md text-lg"
          >
            View Your Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantsProperties;
