import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier.</p>
      
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
      
      <div className="mt-10 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
        <div className="p-4 border-2 border-gray-300 rounded">
          <pre className="whitespace-pre-wrap text-sm">{"GET /api/users\n[ { id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' } ]"}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
