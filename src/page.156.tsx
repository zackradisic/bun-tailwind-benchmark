import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun & Tailwind</h1>
      <p className="text-lg text-gray-700 mb-6">
        Building fullstack applications has never been easier!
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs m-4 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Component</h2>
          <p className="text-gray-600">This is a simple client-side component powered by React.</p>
        </div>
        <div className="max-w-xs m-4 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-500">Server Response</h2>
          <p className="text-gray-600">Our API responds swiftly with data, thanks to Bun's fast runtime.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
    </div>
  );
};

export default App;
