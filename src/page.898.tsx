import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-10">This is a fullstack application built with React & TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl text-center text-gray-800">Frontend</h2>
          <p className="text-center text-gray-600">Fast rendering with React!</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl text-center text-gray-800">Backend</h2>
          <p className="text-center text-gray-600">Seamless API integration!</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl text-center text-gray-800">Deployment</h2>
          <p className="text-center text-gray-600">Simple and speedy deployment with Bun!</p>
        </div>
      </div>
      <button className="mt-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default App;
