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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + Tailwind CSS Demo</h1>
      <button
        onClick={fetchData}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Fetch Users
      </button>
      <p className="mt-4 text-gray-700">Check the console for user data!</p>
    </div>
  );
};

export default App;
