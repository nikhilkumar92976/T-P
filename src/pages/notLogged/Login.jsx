import React from "react";
import { Button } from "@radix-ui/themes";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="accent-green-300 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="  w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-end text-sm text-blue-600">
           Forgot password?
          </div>
          <div className="flex justify-center space-x-3 ">
            <Button variant="outline"className="hover:bg-neutral-200"> Create an Account</Button>
            <Button size='2' className="px-6" variant="classic"> Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
