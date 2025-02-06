import "./style.css";
import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="flex items-center justify-between border-b py-3">
                <span className="text-lg font-medium text-gray-800">{user.name}</span>
                <span className="text-sm text-gray-600">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
