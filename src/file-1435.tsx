import React from "react";

const BunTailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">
          Welcome to Bun's Tailwind Integration!
        </h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="max-w-md w-full p-5 bg-white rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Build Fast with Bun
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Discover how simple it is to develop fullstack applications using
            Bun and Tailwind CSS. The integration is seamless and powerful!
          </p>
          <ul className="list-disc list-inside">
            <li className="text-gray-600 mb-1">⚡ Fast setup</li>
            <li className="text-gray-600 mb-1">⚡ Minimal configuration</li>
            <li className="text-gray-600 mb-1">⚡ Lightning-fast development</li>
          </ul>
        </div>
        <button className="mt-5 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
          Get Started
        </button>
      </main>
      <footer className="bg-gray-800 w-full p-4 mt-10">
        <p className="text-white text-center">
          &copy; 2023 Bun Development Community
        </p>
      </footer>
    </div>
  );
};

export default BunTailwindDemo;
