import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-8">User List</h1>
      <div className="rounded-lg shadow-lg bg-white text-black p-4 max-w-md w-full">
        <ul className="divide-y divide-gray-300">
          {users.map((user) => (
            <li key={user.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
