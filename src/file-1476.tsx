import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Bun!</h1>
        <p className="text-gray-700 text-base text-center mb-6">
          Experience the seamless integration of React and TypeScript with Tailwind CSS. Fast, simple, and efficient!
        </p>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <div className="w-1/4 text-center">
          <h2 className="text-xl font-semibold mb-2">Server Response</h2>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-sm text-gray-600">API is up and running!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
