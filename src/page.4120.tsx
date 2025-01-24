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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind</h1>
      <p className="text-lg text-gray-700">This is a demonstration of a fullstack app using Bun, React & TypeScript!</p>
      <button 
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        onClick={fetchData}
      >
        Fetch Users
      </button>
    </div>
  );
}

export default App;
