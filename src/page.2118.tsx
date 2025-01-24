import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app built with React, TypeScript, and Tailwind CSS.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">This section showcases the client rendered by React.</p>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">Fast rendering with React.</li>
            <li className="text-gray-700">Tailwind CSS enables rapid styling.</li>
            <li className="text-gray-700">State management handled effortlessly.</li>
          </ul>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600">This section showcases the server capabilities.</p>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">API requests handled with ease.</li>
            <li className="text-gray-700">Handles multiple static routes.</li>
            <li className="text-gray-700">Utilizes Bun's new fullstack features.</li>
          </ul>
        </div>
      </div>
      <footer className="mt-8 p-4 bg-blue-600 text-white rounded-lg">
        <p>Built with ❤️ using Bun, React, TypeScript, and Tailwind CSS!</p>
      </footer>
    </div>
  );
};

export default App;
