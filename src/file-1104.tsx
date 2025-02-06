import "./style.css";
import React from 'react';

const FastFullstackBun: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="container mx-auto text-center p-5">
        <h1 className="text-5xl font-bold text-white mb-5 shadow-lg">Build Fast with Bun</h1>
        <p className="text-2xl text-white mb-10">Experience the simplicity of fullstack development.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
          Get Started
        </button>
        <div className="mt-10">
          <h2 className="text-4xl font-semibold text-white">Why Choose Bun?</h2>
          <ul className="list-disc list-inside text-left text-white mt-5">
            <li>🔹 Super Fast!</li>
            <li>🔹 Built-in API handling</li>
            <li>🔹 Simple HTML imports</li>
            <li>🔹 TailwindCSS integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FastFullstackBun;
