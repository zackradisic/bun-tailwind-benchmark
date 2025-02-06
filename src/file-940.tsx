import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-5">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Experience the blend of speed and simplicity. Building fullstack applications has never been so easy!
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 mb-4">
            Learn More
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-200 rounded-lg shadow">
              <h2 className="font-semibold text-blue-500">Server</h2>
              <p className="text-gray-600">Handle your API requests effortlessly.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg shadow">
              <h2 className="font-semibold text-blue-500">Client</h2>
              <p className="text-gray-600">Render UI components using React easily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
