import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using Bun with React and TypeScript!</p>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        Click Me!
      </button>
      <div className="mt-10 flex flex-wrap justify-center">
        <div className="p-4 max-w-sm w-full bg-white border shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Server Response</h2>
          <p className="text-gray-600">Fetch data from the server effortlessly.</p>
        </div>
        <div className="p-4 max-w-sm w-full bg-white border shadow-md rounded-lg ml-4">
          <h2 className="text-xl font-semibold text-gray-800">Client Interaction</h2>
          <p className="text-gray-600">Interact with your UI seamlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
