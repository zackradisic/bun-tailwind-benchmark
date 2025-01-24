import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold text-green-600">Client Side</h2>
          <p className="text-center text-gray-600 mt-2">Fast and responsive UI using React and TailwindCSS.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Get Started</button>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold text-red-600">Server Side</h2>
          <p className="text-center text-gray-600 mt-2">Serve your application with Bun's built-in server.</p>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">Explore API</button>
        </div>
      </div>
    </div>
  );
};

export default App;
