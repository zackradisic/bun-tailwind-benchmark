import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-10">Building fullstack applications has never been easier.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600 mt-2">This part runs in the browser and interacts seamlessly with the server.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600 mt-2">This part is your API and handles requests efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
