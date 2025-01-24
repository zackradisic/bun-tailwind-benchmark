import React from "react";

const App = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Bun with Tailwind CSS
      </h1>
      <p className="text-lg text-gray-700 mb-2">
        Building fullstack applications has never been easier!
      </p>
      <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg transition-transform transform hover:scale-105">
        Fetch Users
      </button>
      <div className="mt-6 w-full max-w-md p-4 border rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold">User List</h2>
        <ul className="mt-2">
          {/* User list will be populated here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
