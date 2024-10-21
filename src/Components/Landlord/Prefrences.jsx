import React, { useState } from "react";

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    smoker: "",
    pets: "",
  });

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Preferences Set: ", preferences);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded w-full max-w-sm text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Table-like layout for Smoker and Pets options */}
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div></div>
              <div className="font-semibold">Yes</div>
              <div className="font-semibold">No</div>
            </div>

            {/* Smoker Preferences */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-semibold">Smoker</div>
              <div className="flex justify-center">
                <input
                  type="radio"
                  name="smoker"
                  value="yes"
                  checked={preferences.smoker === "yes"}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="radio"
                  name="smoker"
                  value="no"
                  checked={preferences.smoker === "no"}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Pets Preferences */}
            <div className="grid grid-cols-3 gap-4 items-center mt-4">
              <div className="font-semibold">Pets</div>
              <div className="flex justify-center">
                <input
                  type="radio"
                  name="pets"
                  value="yes"
                  checked={preferences.pets === "yes"}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="radio"
                  name="pets"
                  value="no"
                  checked={preferences.pets === "no"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Set Preferences Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
          >
            Set Preference
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preferences;
