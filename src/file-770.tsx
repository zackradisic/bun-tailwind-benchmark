import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to My Bun App!</h1>
        <p className="text-gray-700 text-base text-center mb-4">
          This is a simple demonstration of using <span className="font-semibold">Bun</span> with <span className="font-semibold">React</span> and <span className="font-semibold">TypeScript</span>.
        </p>
        <p className="text-gray-600 text-sm text-center mb-8">
          The backend API and frontend application run seamlessly together.
        </p>
        <div className="flex items-center justify-around">
          <button className="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300">
            Fetch Data
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
