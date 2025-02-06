import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Bun & Tailwind Integration</h1>
      <p className="text-lg mb-8">
        This is a demonstration of how fast and simple it is to build fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p>
            Rendered using React. Client-side code can leverage Tailwind utility classes easily.
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p>
            API data fetched seamlessly from Bun server. Easily manage requests.
          </p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400">
        Click me!
      </button>
    </div>
  );
};

export default App;
