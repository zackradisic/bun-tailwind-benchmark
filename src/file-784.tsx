import "./style.css";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-lg">
        {users.length > 0 ? (
          users.map((user: any) => (
            <li key={user.id} className="p-4 border-b border-gray-200 hover:bg-gray-50">
              <h2 className="text-2xl">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
