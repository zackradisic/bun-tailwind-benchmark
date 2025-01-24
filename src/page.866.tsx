import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-5 text-blue-600">Bun + Tailwind CSS</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-3">Server Response:</h2>
          <div className="border border-gray-300 p-4 rounded-md shadow-inner">
            <p className="text-gray-500">Fetching users from the API...</p>
            {/* Imagine a section here for real-time data rendering */}
          </div>
        </div>
      </div>
      <button className="mt-5 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
        Fetch Users
      </button>
    </div>
  );
};

export default App;
