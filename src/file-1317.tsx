import "./style.css";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b first:border-t">
              <span className="font-semibold">{user.name}</span> - 
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="p-4">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
