import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user: any) => (
              <li key={user.id} className="bg-gray-200 p-3 rounded-md shadow">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-700">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
