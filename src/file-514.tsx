import "./style.css";
import React from 'react';

const App = () => {
  // Fetch data from API
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl mb-8">This is a fullstack React app using TypeScript and Tailwind CSS.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.length > 0 ? (
          data.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
