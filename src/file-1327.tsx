import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
      <div className="mt-10 flex space-x-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Client Side</h2>
          <p className="text-gray-500">Fast rendering of your components.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Server Side</h2>
          <p className="text-gray-500">Effortless API integration with Bun.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
