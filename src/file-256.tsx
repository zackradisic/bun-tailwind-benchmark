import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Welcome to Bun + React</h1>
      <p className="text-lg mb-4">Fast and simple fullstack development!</p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
        Click Me
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold">Server Response:</h2>
        <pre className="bg-gray-200 p-2 rounded-md">
          {`fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));`}
        </pre>
      </div>
    </div>
  );
};

export default App;
