import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple demonstration of using Bun for fullstack applications with React & TypeScript.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Client Part</h2>
          <p className="mt-2 text-gray-600">This section showcases the client-side application using React components and Tailwind CSS styling.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-200">Click Me</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Server Part</h2>
          <p className="mt-2 text-gray-600">This section demonstrates the server-side capabilities using Bun's HTTP server.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-200">Fetch Data</button>
        </div>
      </div>
      <footer className="mt-8 text-gray-500">Built with 🛠 Bun & Tailwind CSS</footer>
    </div>
  );
};

export default App;
