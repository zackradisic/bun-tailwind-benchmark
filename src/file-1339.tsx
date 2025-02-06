import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun + Tailwind</h1>
        <p className="text-gray-700 mb-6 text-center">
          This is a demo of Bun's fullstack capabilities using React, TypeScript, and Tailwind CSS.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-400 transition duration-300">
            Start Using Bun
          </button>
          <button className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Made with ❤️ using <strong>Bun</strong> & <strong>Tailwind CSS</strong>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
