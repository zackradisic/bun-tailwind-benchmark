import "./style.css";
import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.map(user => (
          <li key={user.id} className="flex justify-between p-3 border-b last:border-b-0">
            <span className="text-gray-800">{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
