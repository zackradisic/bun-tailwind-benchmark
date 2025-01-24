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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.map(user => (
          <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50">
            <p className="text-lg font-semibold text-gray-700">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
