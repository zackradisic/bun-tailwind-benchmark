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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          User List
        </h1>
        <ul className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <li key={user.id} className="py-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-800">{user.name}</span>
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
