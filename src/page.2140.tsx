import React from "react";

const App: React.FC = () => {
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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun & TailwindCSS Demo</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the power of Bun in building fullstack applications with ease!
      </p>
      <button
        onClick={fetchData}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition"
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 bg-white shadow-md rounded">
        <p className="text-gray-600">Inspect console for fetched user data.</p>
      </div>
    </div>
  );
};

export default App;
