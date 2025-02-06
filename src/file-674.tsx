import "./style.css";
import React from 'react';

const TailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <h1 className="text-white text-5xl font-bold mb-6">Bun + TailwindCSS</h1>
      <p className="text-white text-lg mb-6">Experience the speed and simplicity of building fullstack applications with Bun!</p>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-purple-500 text-2xl font-semibold mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2"><span className="font-bold">Fast</span> - Unmatched performance for fullstack applications.</li>
          <li className="mb-2"><span className="font-bold">Simple</span> - Easy to set up and get started.</li>
          <li className="mb-2"><span className="font-bold">Fullstack</span> - Integrate your backend and frontend seamlessly.</li>
        </ul>
      </div>
      <button className="mt-8 px-4 py-2 bg-white text-purple-500 font-semibold rounded-full shadow hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default TailwindDemo;
