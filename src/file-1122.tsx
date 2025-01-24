import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700">Building fullstack applications has never been easier.</p>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="m-4 p-6 border rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Fast Development</h2>
          <p className="text-gray-600">Get your backend and frontend running simultaneously with Bun's powerful dev server.</p>
        </div>
        <div className="m-4 p-6 border rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Tailwind CSS Integration</h2>
          <p className="text-gray-600">Leverage the power of utility-first CSS design with Tailwind to create stunning interfaces quickly.</p>
        </div>
        <div className="m-4 p-6 border rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Seamless API Handling</h2>
          <p className="text-gray-600">Define API routes easily, using Bun’s `fetch` method to serve responses efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
