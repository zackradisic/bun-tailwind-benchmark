import React from "react";

const App: React.FC = () => {
  // Fetching data from the API
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <ul className="space-y-4">
          {users.length === 0 ? (
            <li className="text-gray-500">Loading users...</li>
          ) : (
            users.map((user) => (
              <li key={user.id} className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          )}
        </ul>
      </div>
      <footer className="mt-6">
        <p className="text-sm text-gray-500">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
