import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base text-center mb-6">
          Experience the simplicity and speed of building fullstack applications with 
          <span className="font-semibold text-blue-600"> Bun</span>, <span className="font-semibold text-blue-600">React</span>, 
          and <span className="font-semibold text-blue-600">TypeScript</span>.
        </p>
        <div className="flex justify-center">
          <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">API Request Example</h2>
          <pre className="bg-gray-100 p-4 rounded border border-gray-300 mt-2">
            {`fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
