import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-5xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mb-8 text-xl text-gray-700">This is a simple fullstack app using Bun, React, and TypeScript.</p>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="mt-2 text-gray-600">Effortlessly create amazing frontends with React</p>
        </div>
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="mt-2 text-gray-600">Easily handle API requests with Bun</p>
        </div>
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-red-500">Integrated</h2>
          <p className="mt-2 text-gray-600">Experience seamless integration using bun-plugin-tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default App;
