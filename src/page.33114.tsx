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
      <h1 className="text-4xl font-bold text-blue-500 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {users.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {users.map((user) => (
              <li key={user.id} className="py-2 flex justify-between">
                <span className="text-gray-800">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
      <footer className="mt-6 text-gray-600">
        <p className="text-sm">Powered by Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
