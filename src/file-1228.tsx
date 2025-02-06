import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app built with Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition">
          Client Button
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600 transition">
          Server Button
        </button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md m-2">
          <h2 className="text-2xl font-semibold">Client Component</h2>
          <p className="text-gray-600">This component demonstrates the client-side rendering capabilities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md m-2">
          <h2 className="text-2xl font-semibold">API Response</h2>
          <p className="text-gray-600">Fetch data from the Bun server seamlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
