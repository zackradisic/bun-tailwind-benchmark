import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-4">This is a simple demonstration of using Bun with React and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-600">Client Side</h2>
          <p className="text-gray-600">
            In the client-side code, you can easily create components and style them using Tailwind CSS classes.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-orange-600">Server Side</h2>
          <p className="text-gray-600">
            The server-side uses Bun's HTTP server to handle requests seamlessly, enabling you to serve both the client and API.
          </p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
    </div>
  );
};

export default App;
