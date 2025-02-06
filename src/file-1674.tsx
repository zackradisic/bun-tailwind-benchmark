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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">User List</h1>
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user: any) => (
              <li key={user.id} className="border-b border-gray-200 py-2">
                <span className="font-semibold">{user.name}</span>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
