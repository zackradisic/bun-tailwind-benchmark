import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building a fullstack app has never been easier!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
          Explore Features
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition">
          Get Started
        </button>
      </div>
      <div className="mt-10 w-full max-w-md">
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow transition transform hover:scale-105">
            <h2 className="text-xl font-semibold">Fast Development</h2>
            <p className="text-gray-700">Leverage Bun's fast development server with built-in support for Tailwind.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow transition transform hover:scale-105">
            <h2 className="text-xl font-semibold">Server & Client Integration</h2>
            <p className="text-gray-700">Easily combine your server and client code into a seamless experience.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow transition transform hover:scale-105">
            <h2 className="text-xl font-semibold">Rapid Prototyping</h2>
            <p className="text-gray-700">Quickly prototype using React and Tailwind without boilerplate.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
