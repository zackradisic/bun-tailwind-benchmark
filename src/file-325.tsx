import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack React app served by Bun!</p>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">API Data:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
