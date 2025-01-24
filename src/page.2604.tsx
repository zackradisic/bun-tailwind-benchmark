import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Hello from Bun!</h1>
        <p className="text-gray-700 text-base mb-4">
          This is a fast and simple way to build fullstack applications with
          <span className="font-semibold text-blue-500"> React</span> and 
          <span className="font-semibold text-blue-500"> TypeScript</span> using
          <span className="font-semibold text-blue-500"> Bun</span>.
        </p>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Click Me!
        </button>
        <div className="mt-4 p-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">Server Response: </p>
          <div className="text-sm font-semibold text-green-600">Hello from Bun's server!</div>
        </div>
      </div>
    </div>
  );
};

export default App;
