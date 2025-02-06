import "./style.css";
import React from "react";

const App: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg p-5 bg-white w-3/4">
        {users.length > 0 ? (
          <ul className="space-y-3">
            {users.map((user: any, index: number) => (
              <li key={index} className="flex justify-between items-center p-3 border-b">
                <span className="text-lg font-medium">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
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
