import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandlordProperty = () => {
  const navigate = useNavigate();

  // State to hold the uploaded images
  const [images, setImages] = useState([null, null, null, null]);

  // Handle image upload
  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  const handleNext = () => {
    navigate("/landlord/tenantdetails");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Logo Section */}
      <div className="p-4 rounded-full">
        <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
      </div>

      {/* Image Upload Grid Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg relative"
          >
            {image ? (
              <img
                src={image}
                alt={`Uploaded Property ${index + 1}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <label
                htmlFor={`upload-button-${index}`}
                className="flex items-center justify-center cursor-pointer w-full h-full"
              >
                <span className="text-gray-500">Upload Image</span>
              </label>
            )}
            <input
              id={`upload-button-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e)}
              className="absolute inset-0 opacity-0"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-[28%] bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  );
};

export default LandlordProperty;
