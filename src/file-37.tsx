import "./style.css";
import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">User List</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>
      <ul className="mt-5 space-y-2">
        {/* Assuming users are fetched and stored in a state */}
        {/* {users.map((user) => (
          <li key={user.id} className="p-3 bg-white shadow-md rounded-md">
            {user.name}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default App;
