import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users');
      if (response.ok) {
        const users = await response.json();
        setData(users);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">User List</h1>
        {data ? (
          <ul className="space-y-2">
            {data.map((user: { id: number; name: string }) => (
              <li key={user.id} className="p-4 bg-gray-200 rounded-md shadow">
                <span className="font-bold">{user.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
