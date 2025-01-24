import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-white mb-8">Experience the power of fullstack development with ease!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Frontend</h2>
          <p className="text-gray-600 mb-4">Built with React and TailwindCSS for a responsive UI.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Explore</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Backend</h2>
          <p className="text-gray-600 mb-4">API handled seamlessly with Bun's HTTP server.</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">API Docs</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Deployment</h2>
          <p className="text-gray-600 mb-4">Fast and easy deployment with Bun's built-in features.</p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default App;
