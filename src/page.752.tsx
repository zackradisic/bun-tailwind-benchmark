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
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b border-gray-200 flex justify-between">
              <span className="text-gray-800">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
