import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-2">Your fullstack app is just a few lines of code away.</p>
      <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
        Get Started
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Server Response:</h2>
        <div className="mt-2 p-4 bg-white shadow rounded">
          {/* Example of displaying fetched data from server */}
          <p className="text-gray-600">Data from your API will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
