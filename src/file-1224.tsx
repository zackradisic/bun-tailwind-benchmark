import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        {users.length > 0 ? (
          users.map((user) => (
            <li
              key={user.id}
              className="border-b border-gray-300 py-2 text-lg text-gray-800"
            >
              {user.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found.</li>
        )}
      </ul>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Refresh Users
      </button>
    </div>
  );
};

export default App;
