import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {users.map((user: any) => (
          <li key={user.id} className="p-2 border-b border-gray-200 last:border-0 hover:bg-gray-100 transition">
            {user.name}
          </li>
        ))}
      </ul>
      <footer className="mt-8 text-center text-gray-600">
        <p className="text-sm">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
