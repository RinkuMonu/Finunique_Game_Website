import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Animated GIF */}
        <div className="mb-8 mx-auto max-w-md">
          <img
            src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif"
            alt="Game over animation"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Error Message */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-red-500">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Page Not Found!
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          The page you're looking for has been captured by the enemy or doesn't
          exist.
        </p>

        {/* Action Button */}
        <button
          onClick={() => window.history.back()}
          className="cursor-pointer inline-block bg-blue-900 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Return to back
        </button>

        {/* Additional Gaming Elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
        </div>
      </div>
    </div>
  );
};
