import React from "react";

const App = () => {
  // Fetching data from our API
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="bg-blue-500 text-white py-4 px-8 rounded-full shadow-md">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </header>
      <main className="w-full max-w-4xl mt-4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-sm">
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      </main>
      <footer className="mt-4 text-gray-500 text-sm">
        <p>Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
