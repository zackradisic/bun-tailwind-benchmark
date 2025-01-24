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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg">
          {users.map(user => (
            <li key={user.id} className="p-4 border-b hover:bg-gray-50">
              <span className="font-medium text-gray-800">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
