import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">User List</h1>
        <button 
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
        <ul className="mt-4 space-y-2">
          {/* Render user list items here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
