import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Bun App</h1>
        <p className="text-lg text-gray-700">Using React, TypeScript, and TailwindCSS</p>
      </header>
      <main className="flex flex-col items-center w-full max-w-2xl">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-semibold text-green-500">Data from Server</h2>
          <div className="mt-2 w-full">
            {/* Example of rendering data from the server */}
            <BackendDataComponent />
          </div>
        </div>
      </main>
      <footer className="mt-6">
        <p className="text-sm text-gray-500">Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

const BackendDataComponent: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users'); // Adjust API endpoint as necessary
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      {data.length > 0 ? (
        <ul className="list-disc list-inside">
          {data.map((user) => (
            <li key={user.id} className="p-2 border-b border-gray-200">{user.name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No data available.</p>
      )}
    </div>
  );
};

export default App;
