import "./style.css";
import React from "react";

const App = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <div className="w-10/12 max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Fetch and Display Users</h2>
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 bg-gray-200 rounded-lg flex justify-between items-center">
              <span className="text-lg font-medium">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
        {users.length === 0 && (
          <p className="text-gray-500 mt-4">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
