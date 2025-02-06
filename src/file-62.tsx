import "./style.css";
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((users) => {
        setData(users);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      {loading ? (
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      ) : (
        <ul className="list-disc p-4">
          {data.map((user) => (
            <li key={user.id} className="text-lg text-gray-800">
              {user.name}
            </li>
          ))}
        </ul>
      )}
      <footer className="mt-6 text-sm text-gray-500">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
