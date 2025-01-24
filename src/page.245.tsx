import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.length === 0 ? (
            <li className="p-4 text-center text-gray-500">Loading...</li>
          ) : (
            users.map((user) => (
              <li key={user.id} className="flex items-center justify-between p-4 hover:bg-gray-100">
                <span className="text-gray-800">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
