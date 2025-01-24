import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of Bun's fullstack capabilities with React and TypeScript!
      </p>
      <button 
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={async () => {
          const response = await fetch("/api/users");
          const users = await response.json();
          alert(JSON.stringify(users, null, 2));
        }}
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
