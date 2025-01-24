import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun's Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a demo application showcasing the power of Bun with React & TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-500">Client Component</h2>
          <p className="text-gray-600">
            This section is managed by React on the client-side.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-500">Server Component</h2>
          <p className="text-gray-600">
            This section fetches data from the server seamlessly.
          </p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Click Me!
      </button>
    </div>
  );
};

export default App;
