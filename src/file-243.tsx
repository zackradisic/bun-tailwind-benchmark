import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Client Part</h2>
          <p className="text-gray-600">Fetch data seamlessly with API calls and display using React components!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Server Part</h2>
          <p className="text-gray-600">Use Bun's server capabilities to handle requests efficiently.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Setup</h2>
          <p className="text-gray-600">Easy integration with TailwindCSS for rapid styling!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
