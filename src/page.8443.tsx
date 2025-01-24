import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is your fullstack app using React and TypeScript.
      </p>
      <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">API Data:</h2>
        <ul className="bg-white shadow-md rounded-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="px-4 py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-100"
            >
              Item {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
