import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">
        Experience the speed and simplicity of building fullstack applications with React & TypeScript.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          API Request
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Fetch Data
        </button>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
        <pre className="whitespace-pre-wrap text-gray-600">{"...loading response from API..."}</pre>
      </div>
    </div>
  );
}

export default App;
