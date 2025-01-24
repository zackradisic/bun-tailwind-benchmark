import React from 'react';

const App: React.FC = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700">Fetching user data from the API:</p>
      {data ? (
        <ul className="mt-4">
          {data.map((user: { id: number; name: string }) => (
            <li key={user.id} className="bg-white shadow-md rounded-lg p-4 m-2">
              <h2 className="text-xl font-semibold">{user.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default App;
