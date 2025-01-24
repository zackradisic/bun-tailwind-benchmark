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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">User List</h1>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded-md bg-gray-50">
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
