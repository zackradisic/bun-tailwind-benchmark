import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
          User List
        </h1>
        <ul className="list-disc pl-5">
          {users.length ? (
            users.map((user) => (
              <li key={user.id} className="text-gray-600 mb-2">
                {user.name} - {user.email}
              </li>
            ))
          ) : (
            <li className="text-gray-600">Loading...</li>
          )}
        </ul>
        <footer className="mt-5 text-center">
          <p className="text-sm text-gray-500">
            Powered by Bun & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
