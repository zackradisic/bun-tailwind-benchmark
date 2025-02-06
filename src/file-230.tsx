import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold">Welcome to My Fullstack App</h1>
      </header>
      
      <main className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Live Data from the Server</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Fetch data from our server API */}
          <FetchDataComponent />
        </div>
      </main>
      
      <footer className="mt-10 mb-4">
        <p className="text-gray-600">Created using Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

const FetchDataComponent = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2">User List</h3>
      {data ? (
        <ul className="list-disc list-inside">
          {data.map((user: { id: number; name: string }) => (
            <li key={user.id} className="text-left text-gray-700">{user.name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default App;
