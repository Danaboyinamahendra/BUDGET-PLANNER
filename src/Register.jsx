import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-600">Create Account</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Join the BudgetPlanner today</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a href="/login" className="text-teal-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
