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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-6">User List</h1>
      <ul className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-lg">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="py-4 text-center">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
