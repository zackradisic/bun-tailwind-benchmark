import "./style.css";
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-5">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          User List
        </h1>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <span className="text-lg">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
