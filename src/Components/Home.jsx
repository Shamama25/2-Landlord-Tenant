import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleTenant = () => {
    navigate("/tenants/info");
  };

  const handleLandlord = () => {
    navigate("/landlord/info");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full">
            <img src="../../../src/logo.svg" alt="Logo" className="h-20 w-20" />
          </div>
        </div>
        <h3 className="text-gray-700 text-lg mb-6">What are you?</h3>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleLandlord}
            className="w-64 bg-[#009688] h-16 text-white py-2 px-4 rounded-md text-lg"
          >
            Landlord
          </button>
          <button
            onClick={handleTenant}
            className="w-64 bg-[#009688] h-16 text-white py-2 px-4 rounded-md text-lg"
          >
            Tenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
