import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app using React and TypeScript with seamless integration of Tailwind CSS.</p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
          <h2 className="text-xl font-semibold text-green-600">Server</h2>
          <p className="text-gray-600">Fetch data effortlessly with Bun's built-in server handling.</p>
          <code className="block mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded">Bun.serve({`{ fetch(req) { ... } }`});</code>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Fetch Data</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
          <h2 className="text-xl font-semibold text-red-600">Client</h2>
          <p className="text-gray-600">Build interactive UIs quickly with React components.</p>
          <code className="block mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded">&lt;App /&gt;</code>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Render Component</button>
        </div>
      </div>
    </div>
  );
};

export default App;
