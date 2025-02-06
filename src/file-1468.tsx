import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">Get Started</button>
        <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600">Learn More</button>
      </div>
      <div className="mt-10 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">API Response</h2>
        <ul className="mt-2 space-y-2">
          <li className="p-2 bg-gray-200 rounded">User: John Doe</li>
          <li className="p-2 bg-gray-200 rounded">User: Jane Smith</li>
          <li className="p-2 bg-gray-200 rounded">User: Alice Johnson</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
