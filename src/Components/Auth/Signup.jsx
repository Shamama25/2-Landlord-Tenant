import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Save the user's data to localStorage
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === formData.email) {
      setError("User with this email already exists.");
      return;
    }
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Signup successful!", formData);
    navigate("/home");
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
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={formData.repeatPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 font-semibold">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
