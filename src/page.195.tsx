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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">Building fullstack apps with ease using Bun, React & TypeScript</p>
      <button 
        onClick={fetchData} 
        className="mt-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow"
      >
        Fetch Users
      </button>
      <div className="mt-4 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold">Users List</h2>
        <ul className="list-disc pl-5">
          {/* User data will be rendered here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
