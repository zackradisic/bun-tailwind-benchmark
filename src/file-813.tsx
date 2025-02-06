import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
      </header>
      <main className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Users List</h2>
        {users.length > 0 ? (
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li
                key={index}
                className="bg-green-100 text-green-800 p-3 rounded-md shadow"
              >
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </main>
    </div>
  );
};

export default App;
