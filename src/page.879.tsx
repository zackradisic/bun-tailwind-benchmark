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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">This app showcases Bun's fullstack capabilities with React and TypeScript.</p>
        <button 
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={fetchData}
        >
          Fetch Users
        </button>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold">Users:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {/* Here you would dynamically render fetched users */}
            <li className="text-gray-600">User 1</li>
            <li className="text-gray-600">User 2</li>
            <li className="text-gray-600">User 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
