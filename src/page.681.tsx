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
      <h1 className="text-4xl font-bold mb-8">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="p-4 flex justify-between items-center hover:bg-gray-100 transition-all">
            <span className="text-lg">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
