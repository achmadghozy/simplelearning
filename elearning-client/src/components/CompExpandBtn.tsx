import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandingLoginButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            initial={{ width: "auto" }}
            animate={{ width: "auto" }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-600 hover:text-white 
                     transition-colors duration-300 shadow-lg"
            onClick={() => setIsExpanded(true)}
          >
            Login
          </motion.button>
        ) : (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="absolute right-0 top-[50px] bg-white rounded-lg shadow-xl p-6 w-[400px]"
            style={{ minWidth: `320px` }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Login</h2>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-gray-500 
                           focus:border-transparent transition-all duration-300"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-gray-500 
                           focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between"
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-gray-500 
                             focus:ring-gray-500 transition duration-150"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-600 
                           transition duration-150"
                >
                  Forgot password?
                </a>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                type="submit"
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md 
                         hover:bg-gray-600 focus:outline-none focus:ring-2 
                         focus:ring-gray-500 focus:ring-offset-2 
                         transition-all duration-300"
              >
                Sign in
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-center text-sm text-gray-600"
            >
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Sign up
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandingLoginButton;
