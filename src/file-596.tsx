import "./style.css";
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
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun & React!</h1>
      <p className="text-lg text-gray-600 mb-4">Fetching data from the server...</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-150"
        onClick={fetchData}
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
