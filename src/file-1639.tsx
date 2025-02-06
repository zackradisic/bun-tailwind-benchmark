import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application running with Bun!</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold text-center">Server Integration</h2>
          <p className="text-gray-600 text-sm text-center">Fetching data from the server effortlessly.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold text-center">Client Side</h2>
          <p className="text-gray-600 text-sm text-center">Rendering components with Tailwind CSS.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold text-center">Stylish Components</h2>
          <p className="text-gray-600 text-sm text-center">Utilizing Tailwind classes for design.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
