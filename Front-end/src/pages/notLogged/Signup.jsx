import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import axios from "axios"

const Signup = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");
    const [checked, setchecked] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const loginData = { username, email, password , conformpassword,checked};
      // axios.post('http//')
      console.log("Login Data:", loginData);
      
      setusername("");
      setEmail("");
      setPassword("");
      setconformpassword("");
      setconformpassword(false);
    };
  return (
    <div className="  min-h-screen bg-[#030712] relative flex items-center justify-center">
       {/* Glowing effect */}
       <div className="absolute top-[23%] w-[36vw] h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 rounded-full z-0" />
       
      <div className="relative bg-[#10141E] shadow-lg rounded-xl p-8 w-[32vw] h-[40vw] z-10">
        <h2 className="text-3xl text-white font-bold mb-3 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label 
              className="block text-xl font-medium mb-1 text-white ml-1">
              Username
            </label>
            <input
              type="Username"
              onChange={(e)=>setusername(e.target.value)}
              value={username}
              className="w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your Username"
              required
            />
          </div>
          <div>
            <label   
                 className="block text-xl font-medium mb-1 text-white ml-1">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className= "w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-1 text-white ml-1">
            Password
            </label>
            <input
              type="Password"
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
              onChange={(e) => setconformpassword(e.target.value)}
              value={conformpassword}
              className=" w-full border p-2 rounded-md outline-none bg-[#1C2029] border-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm">
           <div id="left">
            <input 
              onChange={(e) => setchecked(e.target.checked)}
              value={checked}
              type="checkbox" /> Terms and services
              required
           </div>
          
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
          <Link to="/login" className="text-end text-sm text-blue-600 ml-[9vw]"> Already have an Account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
