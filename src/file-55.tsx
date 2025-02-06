import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-800">Welcome to the Bun Fullstack App</h1>
      <p className="mt-4 text-lg text-gray-700">This app showcases Bun's fast integration with React and TypeScript!</p>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600">API Data Fetch</h2>
        <Button />
        
        <div className="mt-4">
          <FetchUsers />
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded">
      Fetch Users
    </button>
  );
};

const FetchUsers = () => {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      <div>
        <button onClick={fetchUsers} className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded">
          Load Users
        </button>
      </div>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
