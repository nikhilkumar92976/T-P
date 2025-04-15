import React, { useState } from "react";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = { email, password };
    console.log("Login Data:", loginData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#030712] relative flex items-center justify-center">
      {/* Glowing effect */}
      <div className="absolute top-[23%] w-[36vw] h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 rounded-full z-0" />

      <div className="relative bg-[#10141E] shadow-lg rounded-xl p-8 w-[32vw] h-[33vw] z-10">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <Link className="text-end text-sm text-blue-600 ml-[19vw]">
            Forgot password?
          </Link>
          <div className="flex justify-center space-x-3 flex-col">
            <Button
              type="submit"
              size="2"
              className="text-2xl font-medium py-1 rounded-2xl"
              variant="classic"
            >
              Submit
            </Button>
            <div className="pl-[8vw] pt-2">
              <Link to="/singUp" className="mt-2 text-xl">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
