import React from 'react';

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun + Tailwind</h1>
      <p className="text-lg mb-6 text-gray-700">Build your fullstack app with ease!</p>
      <button
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
        onClick={fetchData}
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="mt-2">
          {/* Assuming users is coming from API response */}
        </ul>
      </div>
    </div>
  );
};

export default App;
