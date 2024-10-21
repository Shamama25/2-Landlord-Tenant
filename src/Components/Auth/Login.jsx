import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Check if the email and password match
    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      console.log("Login successful!", formData);
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
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

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded font-semibold hover:bg-teal-700"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/" className="text-teal-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
