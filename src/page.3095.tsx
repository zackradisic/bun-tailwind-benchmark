import React from "react";

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
        <ul className="space-y-2">
          <li className="p-2 border border-gray-300 rounded">User 1</li>
          <li className="p-2 border border-gray-300 rounded">User 2</li>
          <li className="p-2 border border-gray-300 rounded">User 3</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Refresh Users
        </button>
      </div>
    </div>
  );
};

export default App;
