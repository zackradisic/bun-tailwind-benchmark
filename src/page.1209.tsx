import React from "react";

const App: React.FC = () => {
  // Client-side fetch to the API
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length ? (
          users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50">
              <span className="font-medium text-gray-800">{user.name}</span>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
