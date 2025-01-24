import React from "react";

const FastBunDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-10">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Welcome to Bun's Fast Fullstack Development!
      </h1>
      <p className="text-xl text-gray-200 mb-6">
        Build your applications in a flash with easy setup and smooth performance.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">🚀 Lightning-fast build times.</li>
          <li className="mb-2">🌐 Fullstack capabilities with ease.</li>
          <li className="mb-2">✨ Seamless integration with Tailwind CSS.</li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
        Get Started Now!
      </button>
    </div>
  );
};

export default FastBunDemo;
