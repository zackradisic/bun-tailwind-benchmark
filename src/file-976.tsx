import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg mb-8">Experience the speed of fullstack development.</p>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Data from the Server:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-700">User 1: Jane Doe</li>
          <li className="text-gray-700">User 2: John Smith</li>
          <li className="text-gray-700">User 3: Alice Johnson</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
