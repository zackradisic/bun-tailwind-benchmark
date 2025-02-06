import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is an example of a fullstack application using Bun with React and TypeScript!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg border border-gray-300 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Client Component</h2>
          <p className="text-gray-600">
            The client side is powered by React. Interact with components seamlessly!
          </p>
        </div>
        <div className="p-6 rounded-lg border border-gray-300 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Backend API</h2>
          <p className="text-gray-600">
            Your API requests are handled effortlessly. Just hit the endpoint!
          </p>
        </div>
        <div className="p-6 rounded-lg border border-gray-300 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Bun's Magic</h2>
          <p className="text-gray-600">
            With Bun, you get fast server-side rendering and a great development experience!
          </p>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Bun + Tailwind Example
      </footer>
    </div>
  );
};

export default App;
