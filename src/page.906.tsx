import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">Building fullstack applications has never been easier.</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
        Get Started
      </button>

      <div className="mt-10 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">API Data</h2>
        <div className="mt-4">
          <p className="text-gray-600">Fetching data from the server...</p>
          {/* The data from the API can be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default App;
