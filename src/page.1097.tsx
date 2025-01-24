import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">Welcome to Bun + Tailwind!</h1>
      <p className="text-xl mb-8">Building fullstack applications has never been easier.</p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg m-4 max-w-xs transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Frontend</h2>
          <p className="mb-4">Client-side rendering with React & TypeScript.</p>
          <div className="flex justify-between">
            <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full">React</span>
            <span className="inline-block bg-green-500 text-white px-2 py-1 rounded-full">TypeScript</span>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg m-4 max-w-xs transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Backend</h2>
          <p className="mb-4">Fast API handling with Bun's server.</p>
          <div className="flex justify-between">
            <span className="inline-block bg-purple-500 text-white px-2 py-1 rounded-full">Bun</span>
            <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded-full">API</span>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center p-4 bg-black bg-opacity-50">
        <p className="text-sm">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
