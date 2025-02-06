import "./style.css";
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">User List</h1>
      <ul className="bg-white shadow rounded-lg p-5">
        {users.map((user) => (
          <li key={user.id} className="border-b py-2 last:border-b-0">
            <span className="font-medium">{user.name}</span> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
