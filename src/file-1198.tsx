import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <header className="bg-gray-800 text-white p-4 w-full">
        <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
      </header>
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold">User List</h2>
        <ul className="mt-4 space-y-2">
          {users.map(user => (
            <li key={user.id} className="bg-white shadow-md p-4 rounded-lg flex justify-between">
              <span className="text-lg">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-4 w-full text-center">
        <p>© 2023 My Application</p>
      </footer>
    </div>
  );
};

export default App;
