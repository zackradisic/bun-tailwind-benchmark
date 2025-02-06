import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun and React.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">Rendered using React and Tailwind CSS.</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="text-gray-600">Handled by Bun's efficient server capabilities.</p>
        </div>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">Click Me!</button>
    </div>
  );
};

export default App;
