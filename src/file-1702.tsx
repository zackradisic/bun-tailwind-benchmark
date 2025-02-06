import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application using Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Fast API</h2>
          <p className="text-gray-600">Fetch data from the server seamlessly using Bun's fetch API.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Responsive Design</h2>
          <p className="text-gray-600">Built with responsive layout in mind, utilizing Tailwind CSS utilities.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
