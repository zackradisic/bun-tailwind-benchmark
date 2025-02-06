import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <button className="px-6 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300">
        Click Me
      </button>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fast Fullstack Development</h2>
        <p className="text-gray-600 mb-4">
          Experience seamless integration of server and client using Bun and React.
        </p>
        <p className="text-gray-500">
          Data from server: 
          <span className="font-semibold text-gray-800"> {JSON.stringify(fetchData())}</span>
        </p>
      </div>
    </div>
  );
};

async function fetchData() {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
}

export default App;
