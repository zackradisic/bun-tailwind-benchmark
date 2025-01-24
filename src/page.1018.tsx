import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome to Bun!</h1>
        <p className="text-gray-700 text-base mb-4">
          This is a simple demonstration of how you can build fullstack applications using Bun, React, and TypeScript.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Our API provides fast responses and the integration with Tailwind CSS allows you to style your components effortlessly.
        </p>
        <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
        <div className="mt-6 text-center text-gray-500">
          <p>API Response:</p>
          <pre className="bg-gray-200 p-4 rounded">
            fetch('/api/users').then(res => res.json()).then(data => console.log(data));
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
