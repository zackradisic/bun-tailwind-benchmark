import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4">
        <h1 className="text-white text-3xl text-center">User Dashboard</h1>
      </header>
      <main className="flex flex-col items-center mt-6 w-full max-w-4xl">
        <h2 className="text-2xl mb-4">List of Users</h2>
        <ul className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          {users.map((user) => (
            <li key={user.id} className="border-b border-gray-200 px-4 py-2">
              <span className="text-lg font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
        <div className="my-8">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Add User
          </button>
        </div>
      </main>
      <footer className="w-full text-center py-4 text-gray-600">
        <p>Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
