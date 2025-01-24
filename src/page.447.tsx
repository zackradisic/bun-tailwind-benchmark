import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun & Tailwind!</h1>
      <div className="flex flex-wrap justify-center">
        <div className="p-5 m-2 bg-white shadow-md rounded-lg border border-gray-300 max-w-xs">
          <h2 className="text-2xl font-semibold text-gray-800">Bun's Power</h2>
          <p className="text-gray-600 my-2">Build fullstack applications with incredible speed and ease.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
            Get Started
          </button>
        </div>
        <div className="p-5 m-2 bg-white shadow-md rounded-lg border border-gray-300 max-w-xs">
          <h2 className="text-2xl font-semibold text-gray-800">Tailwind Simplified</h2>
          <p className="text-gray-600 my-2">Utilize utility classes to style your components directly.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all">
            Learn More
          </button>
        </div>
        <div className="p-5 m-2 bg-white shadow-md rounded-lg border border-gray-300 max-w-xs">
          <h2 className="text-2xl font-semibold text-gray-800">React Integration</h2>
          <p className="text-gray-600 my-2">Effortlessly integrate React into your fullstack app.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
            Explore Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
