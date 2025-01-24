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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-5">This is a fullstack application powered by Bun, React, and TailwindCSS!</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300" 
        onClick={() => fetchData()}
      >
        Fetch Users
      </button>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">API Response:</h2>
        <pre className="bg-white p-4 rounded-lg shadow-md mt-2"></pre>
      </div>
    </div>
  );
};

export default App;
