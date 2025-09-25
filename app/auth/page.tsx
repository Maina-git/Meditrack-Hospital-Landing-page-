"use client"
import React, { useState } from "react";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-100 pt-16 pb-16">
      <div className="w-[90%] md:w-[40%] bg-white p-10 rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h1>
        <p className="text-gray-500 text-center mb-8">
          {isRegister
            ? "Register to access our hospital services easily."
            : "Sign in to manage your health and appointments."}
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-3 bg-gray-100 rounded-lg outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-3 bg-gray-100 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-3 bg-gray-100 rounded-lg outline-none"
          />

          {isRegister && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-5 py-3 bg-gray-100 rounded-lg outline-none"
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          >
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>

        {/* Toggle link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {isRegister ? "Sign In" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
