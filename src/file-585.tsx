import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">Fetching users from the server...</p>
      <button 
        onClick={fetchUsers}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
