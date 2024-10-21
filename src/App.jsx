import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home";
import TenantsInfo from "./Components/Tenants/TenantsInfo";
import TenantsProperties from "./Components/Tenants/TenantsProperties";
import LandlordInfo from "./Components/Landlord/LandlordInfo";
import LandlordProperty from "./Components/Landlord/LandlordProperty";
import LandlordPropertyDetails from "./Components/Landlord/LandlordPropertyDetails";
import TenantDetails from "./Components/Landlord/TenantsDetails";
import Preferences from "./Components/Landlord/Prefrences";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tenants/info" element={<TenantsInfo />} />
        <Route path="/tenants/properties" element={<TenantsProperties />} />
        <Route path="/landlord/info" element={<LandlordInfo />} />
        <Route
          path="/landlord/propertydetails"
          element={<LandlordPropertyDetails />}
        />
        <Route path="/landlord/property" element={<LandlordProperty />} />
        <Route path="/landlord/tenantdetails" element={<TenantDetails />} />
        <Route path="/landlord/prefrences" element={<Preferences />} />
      </Routes>
    </Router>
  );
};

export default App;
