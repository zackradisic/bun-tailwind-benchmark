import "./style.css";
import React from "react";

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  };

  const [users, setUsers] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : users.length ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-4 bg-blue-100 rounded-md">
                <span className="font-semibold">{user.name}</span> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
