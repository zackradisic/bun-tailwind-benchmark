import "./style.css";
import React from 'react';

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-4">
        This is a demo application showcasing Bun's fullstack capabilities with React and TypeScript.
      </p>
      <button
        onClick={fetchUsers}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">User List</h2>
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Assuming a users state here return a list of users */}
          {/** users.map(user => (
             <li key={user.id} className="px-4 py-2 border-b">
               {user.name}
             </li>
           )) **/}
        </ul>
      </div>
    </div>
  );
};

export default App;
