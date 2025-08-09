import { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useAuthStore from "../../store/useAuthStore";

const Register = () => {
  const register = useAuthStore((state) => state.register);
  const { isLoading, error } = useAuthStore();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      const result = await register({ username, email, password });
      if (result) {
        <Navigate to="/login" />
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <motion.div
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-2xl font-bold mb-6">
          Create your account
        </h2>

        {error && (
          <motion.div
            className="bg-red-100 text-red-700 p-3 rounded-md mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="form-label">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="form-input w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="form-input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="form-label">
              Confirm password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="form-input w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Account type</label>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="form-checkbox"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <motion.button
              type="submit"
              className="btn-primary w-full"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </motion.button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
