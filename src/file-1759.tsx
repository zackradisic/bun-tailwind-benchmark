import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is an example of a fullstack application!</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">API Data:</h2>
        <pre className="text-sm text-gray-800 bg-gray-100 p-4 rounded overflow-x-auto">
          {`fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));`}
        </pre>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
