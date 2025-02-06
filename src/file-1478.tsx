import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Bun & TailwindCSS</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <ul className="space-y-2">
            {/* Sample user items; in practice, you'd map over fetched data */}
            <li className="p-2 border border-gray-200 rounded hover:bg-gray-50">User 1</li>
            <li className="p-2 border border-gray-200 rounded hover:bg-gray-50">User 2</li>
            <li className="p-2 border border-gray-200 rounded hover:bg-gray-50">User 3</li>
          </ul>
        </div>
      </main>
      <footer className="bg-blue-600 text-white w-full p-4 text-center">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
