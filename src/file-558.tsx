import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-5">Building fullstack applications made easy.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="p-5 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="mt-2 text-gray-600">This is where your React components live and breathe!</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="mt-2 text-gray-600">Api calls and server logic happens here, powered by Bun!</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Powered by <span className="font-bold text-blue-600">Bun</span> and <span className="font-bold text-blue-600">TailwindCSS</span></p>
      </footer>
    </div>
  );
};

export default App;
