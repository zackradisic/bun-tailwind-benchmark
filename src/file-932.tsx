import "./style.css";
import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 text-center">
        <h1 className="text-2xl font-bold">Bun + React + TypeScript</h1>
        <p className="text-sm">Fast and simple fullstack development</p>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">User List</h2>
          <ul className="list-disc pl-5">
            {/* Example static list item */}
            <li className="text-gray-700">User 1</li>
            <li className="text-gray-700">User 2</li>
            <li className="text-gray-700">User 3</li>
          </ul>
        </div>
      </main>
      <footer className="w-full py-4 text-center bg-gray-200">
        <p className="text-sm">© 2023 Bun Fullstack Example</p>
      </footer>
    </div>
  );
};

export default App;
