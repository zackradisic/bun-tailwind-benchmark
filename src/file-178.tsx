import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]); 

  React.useEffect(() => {
    // Fetch users from the API
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {users.map((user: any, index: number) => (
            <li key={index} className="p-4 bg-gray-200 rounded-md">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Refresh Users
      </button>
    </div>
  );
};

export default App;
