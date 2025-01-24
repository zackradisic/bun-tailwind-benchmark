import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl mb-8">Here’s how simple it is to build fullstack applications with Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition">
          <h2 className="text-3xl font-semibold mb-2">Client-side Rendering</h2>
          <p>This is where the React component gets rendered and interacts with the user.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Click Me</button>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition">
          <h2 className="text-3xl font-semibold mb-2">Server-side Rendering</h2>
          <p>Fetch data from APIs and render it on the server for better performance!</p>
          <p className="mt-2 text-sm text-gray-500">Try fetching data from our API to see it in action.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
