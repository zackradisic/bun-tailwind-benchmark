import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6">
        {users.length > 0 ? (
          <ul className="list-disc list-inside">
            {users.map((user) => (
              <li key={user.id} className="py-2 px-4 bg-white rounded shadow mb-2">
                <span className="font-semibold">{user.name}</span> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default App;
