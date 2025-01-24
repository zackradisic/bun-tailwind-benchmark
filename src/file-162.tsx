import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Bun App with TailwindCSS
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of using Bun with React and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold text-green-500">Client Component</h2>
          <p className="text-gray-600">This section showcases the client side of our application.</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold text-yellow-500">Server Component</h2>
          <p className="text-gray-600">This section demonstrates the backend processing.</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me!
      </button>
    </div>
  );
};

export default App;
