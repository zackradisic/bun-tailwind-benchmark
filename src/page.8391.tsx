import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 mb-6">This is a simple demonstration of Bun's integration with Tailwind CSS.</p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Powered by Bun and React</p>
        </div>
      </div>
    </div>
  );
};

export default App;
