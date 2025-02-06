import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    // Fetch users from the API
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-lg rounded-lg w-full max-w-md">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b border-gray-300 hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
