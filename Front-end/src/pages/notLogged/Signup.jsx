import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [checked, setchecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validate terms and services checkbox
    if (!checked) {
      alert("You must agree to the terms and services!");
      return;
    }

    const signupData = { username, email, password };

    try {
      // Send data to the backend
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        signupData
      );

      // Handle success response
      alert("Registered successfully!");
      console.log("Signup successful:", response.data);

      // Clear form fields
      setusername("");
      setEmail("");
      setPassword("");
      setconfirmpassword("");
      setchecked(false);
    } catch (error) {
      // Handle error response
      console.error("Error during signup:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] relative flex items-center justify-center">
      {/* Glowing effect */}
      <div className="absolute top-[23%] w-[36vw] h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 rounded-full z-0" />

      <div className="relative bg-[#10141E] shadow-lg rounded-xl p-8 w-[32vw] h-[40vw] z-10">
        <h2 className="text-3xl text-white font-bold mb-3 text-center">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your Username"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e) => setconfirmpassword(e.target.value)}
              value={confirmpassword}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <div id="left">
              <input
                type="checkbox"
                onChange={(e) => setchecked(e.target.checked)}
                checked={checked}
              />{" "}
              Terms and services required
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <Link to="/login" className="text-end text-sm text-blue-600 ml-[9vw]">
            Already have an Account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
