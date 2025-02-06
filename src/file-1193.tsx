import "./style.css";
import React from 'react';

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-center mb-4">This is a demo showcasing how fast and simple it is to build fullstack applications using Bun with React and TypeScript.</p>
        <div className="mt-4">
          <button
            onClick={fetchUsers}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Fetch Users
          </button>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Fetched Users:</h2>
          <ul className="mt-2 text-gray-600">
            {/* Example user list, ideally you'd map over user data here */}
            <li className="border-b py-2">User 1</li>
            <li className="border-b py-2">User 2</li>
            <li className="border-b py-2">User 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
