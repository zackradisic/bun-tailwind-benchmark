import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Bun + TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This is a demo application showcasing the fast and simple integration of Bun with React and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">
            This section handles the client-side rendering using React. With Bun's bundler, you can easily run and build your React components integrated with Tailwind CSS.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">
            The server-side code is seamlessly handled by Bun's dev server, allowing for simple API handling and serving of static files like HTML.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
