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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Bun with React & TypeScript!</h1>
      <p className="text-xl mb-3">Your fullstack app is powered by Bun!</p>
      <button 
        onClick={fetchData}
        className="px-4 py-2 bg-blue-700 hover:bg-blue-800 transition duration-300 rounded-md"
      >
        Fetch Users
      </button>
      <div className="mt-4">
        <h2 className="text-2xl">Fetched Users:</h2>
        <ul id="user-list" className="list-disc pl-5"></ul>
      </div>
    </div>
  );
};

export default App;
