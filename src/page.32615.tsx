import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-600 mb-6">
        Experience the speed and simplicity of creating fullstack applications!
      </p>
      <div className="flex space-x-4">
        <button className="btn btn-blue">Get Started</button>
        <button className="btn btn-green">Learn More</button>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2023 Bun Integration Demo</p>
      </footer>
    </div>
  );
}

export default App;
