import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <div className="flex flex-col gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Client Button
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Server Action
        </button>
      </div>
      <p className="mt-6 text-lg">See how easy it is to build fullstack apps!</p>
    </div>
  );
};

export default App;
