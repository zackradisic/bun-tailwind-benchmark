import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-gray-700 mb-8">This is a demo application showcasing the integration of Bun with TailwindCSS.</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition ease-in duration-200">Click Me</button>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold">Feature One</h2>
          <p className="text-gray-600">Description of feature one goes here.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold">Feature Two</h2>
          <p className="text-gray-600">Description of feature two goes here.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold">Feature Three</h2>
          <p className="text-gray-600">Description of feature three goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
