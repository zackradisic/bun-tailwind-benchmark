import React from "react";

const FastApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fast App!</h1>
      <p className="text-lg text-gray-700 mb-6">This component showcases Bun's rapid integration with React and Tailwind CSS.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-8 p-4 bg-white shadow-lg rounded-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-500">Server API Response:</h2>
        <div className="mt-2 p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="text-gray-700">Loading data from server...</p>
          {/* Here you can implement an API call using fetch or any other method */}
        </div>
      </div>
    </div>
  );
};

export default FastApp;
