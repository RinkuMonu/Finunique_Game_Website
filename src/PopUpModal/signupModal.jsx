import React, { useState } from "react";

export const SignUpModal = ({ isOpen, closeModal }) => {
  return (
    <div className="relative ">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          {/* Background overlay with blur */}
          <div
            className="absolute inset-0 bg-black/30 bg-opacity-40 backdrop-blur-[2px]"
            onClick={closeModal}
          ></div>

          {/* Modal content */}
          <div className="relative bg-[#0B050C] rounded-lg shadow-lg w-11/12 max-w-md p-6 z-50 outline-1 outline-red-400">
            <h2 className="text-2xl font-semibold text-center mb-4 text-red-400 ">
              Sign up
            </h2>
            <form className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  border-red-300 focus:border-yellow-500 placeholder:text-gray-400 text-gray-300"
                  placeholder="Enter your  full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  border-red-300 focus:border-yellow-500 placeholder:text-gray-400 text-gray-300"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  OTP
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline focus:ring  border-red-300 focus:border-yellow-500 placeholder:text-gray-400 text-gray-300"
                  placeholder="Enter your OTP"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
