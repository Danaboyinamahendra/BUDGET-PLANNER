import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function LoginPage() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      alert(`Welcome, ${name}!`);
      // Navigate or handle login logic here
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcfc] flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        {/* Left Section */}
        <div className="flex-1 space-y-6 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold">
            Take Control of <br />
            <span className="text-cyan-500">Your Money</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Personal budgeting is the secret to financial freedom. <br />
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="What is your name?"
              className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-md focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="bg-gray-900 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800"
              onClick={handleLogin}
            >
              Create Account <FaUserPlus />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src="/budget-illustration.png"
            alt="Budgeting Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
