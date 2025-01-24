import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Fast and simple fullstack development with React and TypeScript.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-purple-800">Client Part</h2>
          <p className="text-gray-600">This component showcases how to use Tailwind with Bun's bundler.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-purple-800">Server Part</h2>
          <p className="text-gray-600">The backend integrates seamlessly, allowing you to serve APIs effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
