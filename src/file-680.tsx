import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the speed of building fullstack applications!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="p-6 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Client</h2>
          <p className="text-gray-600 mt-2">User interface served directly through Bun's powerful bundler.</p>
        </div>
        <div className="p-6 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Server</h2>
          <p className="text-gray-600 mt-2">Fast and seamless API handling all in one application.</p>
        </div>
      </div>

      <footer className="mt-10 text-gray-500">
        <p>Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
