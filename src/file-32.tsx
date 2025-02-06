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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-5">
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-md">
              <span className="font-semibold text-xl">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
