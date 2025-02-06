import "./style.css";
import React from "react";

const App: React.FC = () => {
  // Example API call to Bun's backend
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to Bun + Tailwind
      </h1>
      <p className="text-lg mb-8">
        Fetching users from the Bun API...
      </p>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users:</h2>
        <ul className="space-y-2">
          {users.length === 0 ? (
            <li className="text-gray-600">No users found.</li>
          ) : (
            users.map((user: { id: number; name: string }) => (
              <li key={user.id} className="p-2 border-b border-gray-200">
                {user.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
