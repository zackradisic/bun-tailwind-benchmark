import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <ul className="divide-y divide-gray-200">
          {data.map((user) => (
            <li
              key={user.id}
              className="py-2 flex justify-between items-center"
            >
              <span className="text-gray-800">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
