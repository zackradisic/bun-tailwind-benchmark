import React from "react";

const App = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md p-5 bg-white rounded shadow-md">
        <button
          onClick={fetchData}
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          Fetch Users
        </button>
        <ul className="mt-4 space-y-2">
          {/* Dynamically render user data here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
