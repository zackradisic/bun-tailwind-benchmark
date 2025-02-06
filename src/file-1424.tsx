import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 p-5 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-8">This is a fullstack application using Bun, React, and TypeScript.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white text-black p-5 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Client Side</h2>
          <p className="mb-2">This part handles the user interface.</p>
          <p className="text-sm text-gray-600">React components styled with Tailwind CSS make it fast and easy!</p>
        </div>
        
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Server Side</h2>
          <p className="mb-2">This backend serves the API requests.</p>
          <p className="text-sm text-gray-200">Built using Bun's fast server capabilities.</p>
        </div>
      </div>
      
      <footer className="mt-10">
        <p className="text-sm">&copy; 2023 Bun Fullstack Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
