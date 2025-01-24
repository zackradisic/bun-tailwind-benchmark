import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been this easy!</p>
      <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
        Click Me
      </button>
      <div className="mt-5 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">API Data:</h2>
        <div className="flex flex-col space-y-2 mt-3">
          <div className="p-4 bg-blue-100 rounded-md">User 1</div>
          <div className="p-4 bg-blue-100 rounded-md">User 2</div>
          <div className="p-4 bg-blue-100 rounded-md">User 3</div>
        </div>
      </div>
    </div>
  );
};

export default App;
