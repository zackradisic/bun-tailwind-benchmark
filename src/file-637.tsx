import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Bun + Tailwind + React</h1>
      <p className="text-lg text-gray-700 mb-8">Fetching users from the server...</p>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        {data ? (
          <ul className="divide-y divide-gray-300">
            {data.map((user: any, index: number) => (
              <li key={index} className="p-4 hover:bg-gray-100 flex justify-between">
                <span className="font-medium text-gray-900">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
