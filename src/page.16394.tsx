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
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <button
        onClick={fetchData}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-4 p-4 bg-white rounded shadow-lg w-80">
        <h2 className="text-2xl font-semibold">User List:</h2>
        <ul className="mt-2 space-y-2">
          {/* Display fetched users here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
