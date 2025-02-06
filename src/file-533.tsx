import "./style.css";
import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + Tailwind!</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>
      <p className="mt-4 text-gray-700">
        Click the button to fetch users from the server!
      </p>
    </div>
  );
};

export default App;
