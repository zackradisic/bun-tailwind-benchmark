import "./style.css";
import React from "react";

const App: React.FC = () => {
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
      <h1 className="text-4xl font-bold text-blue-600">User List</h1>
      <div className="mt-4 w-full max-w-md">
        {users.length > 0 ? (
          <ul className="bg-white shadow-md rounded-lg overflow-hidden">
            {users.map((user: any) => (
              <li key={user.id} className="p-4 border-b last:border-b-0">
                <p className="text-lg text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default App;
