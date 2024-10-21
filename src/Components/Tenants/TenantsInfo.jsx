import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TenantsInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bio: "",
    smoker: "",
    pets: "",
  });

  const [errors, setErrors] = useState({
    bio: false,
    smoker: false,
    pets: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProperties = () => {
    // Validation logic
    const newErrors = {
      bio: formData.bio.trim() === "",
      smoker: formData.smoker === "",
      pets: formData.pets === "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === false);

    if (isValid) {
      navigate("/tenants/properties");
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
          Stand out from the crowd. Write a short bio <br />
          about yourself
        </h3>
        {/* Form Container */}
        <div className="flex flex-col items-center space-y-4">
          {/* Textarea for bio */}
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className={`w-96 h-32 border p-4 rounded-md ${
              errors.bio ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.bio && (
            <p className="text-red-500 text-sm">Bio cannot be empty.</p>
          )}

          {/* Smoker and Pets fields */}
          <div className="flex justify-between w-96">
            <label className="text-gray-700">Smoker:</label>
            <div className="mr-[150px]">
              <input
                type="radio"
                name="smoker"
                value="yes"
                onChange={handleChange}
                checked={formData.smoker === "yes"}
                className="mr-1"
              />{" "}
              Yes
              <input
                type="radio"
                name="smoker"
                value="no"
                onChange={handleChange}
                checked={formData.smoker === "no"}
                className="ml-4 mr-1"
              />{" "}
              No
            </div>
          </div>
          {errors.smoker && (
            <p className="text-red-500 text-sm">
              Please select an option for smoker.
            </p>
          )}

          <div className="flex justify-between w-96">
            <label className="text-gray-700">Pets:</label>
            <div className="mr-[150px]">
              <input
                type="radio"
                name="pets"
                value="yes"
                onChange={handleChange}
                checked={formData.pets === "yes"}
                className="mr-1"
              />{" "}
              Yes
              <input
                type="radio"
                name="pets"
                value="no"
                onChange={handleChange}
                checked={formData.pets === "no"}
                className="ml-4 mr-1"
              />{" "}
              No
            </div>
          </div>
          {errors.pets && (
            <p className="text-red-500 text-sm">
              Please select an option for pets.
            </p>
          )}

          {/* Next Button */}
          <button
            onClick={handleProperties}
            className="w-96 bg-[#009688] h-12 text-white py-2 px-4 rounded-md text-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantsInfo;
