import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple fullstack application powered by Bun with Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700">Client Side</h2>
            <p className="text-gray-600">
              This component showcases how to use Tailwind classes effectively in your React components!
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700">Server Side</h2>
            <p className="text-gray-600">
              With Bun's integrated server, API requests can be handled seamlessly along with serving static files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
