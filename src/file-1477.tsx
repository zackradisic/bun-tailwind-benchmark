import { useEffect, useState } from "react";

const fetchUsers = async () => {
  const response = await fetch("/api/users");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">User List</h1>
      {users.length > 0 ? (
        <ul className="w-full max-w-md bg-white rounded-lg shadow-md">
          {users.map((user) => (
            <li key={user.id} className="border-b p-4 hover:bg-gray-50">
              <h2 className="text-xl text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">Loading users...</p>
      )}
    </div>
  );
};

export default App;
