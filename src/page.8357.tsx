import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // Fetch users from API on component mount
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Users List</h1>
      <ul className="list-disc">
        {users.map((user, index) => (
          <li key={index} className="text-lg text-gray-800">
            {user.name}
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 border rounded-lg shadow bg-white">
        <h2 className="text-2xl font-semibold">Welcome to Bun with Tailwind!</h2>
        <p className="text-gray-600">This is a simple fullstack application.</p>
      </div>
    </div>
  );
};

export default App;
