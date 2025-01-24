import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-5 text-center text-blue-600">User List</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-blue-50 rounded-md p-4 shadow-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
