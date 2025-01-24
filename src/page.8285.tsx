import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-white mb-8">Building fullstack applications has never been easier.</p>
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
        Click Me!
      </button>
      
      <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Server Response:</h2>
        <p className="text-gray-600" id="serverResponse">Waiting for response...</p>
      </div>
    </div>
  );
};

// Fetch data from API
const fetchData = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  document.getElementById('serverResponse')!.innerText = JSON.stringify(data);
};

// Call fetchData when the component mounts
React.useEffect(() => {
  fetchData();
}, []);

export default App;
