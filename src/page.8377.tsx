import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This app is built with React and TypeScript using Bun's new Tailwind integration!</p>
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        Click Me!
      </button>
      <div className="mt-10 space-y-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Server Response</h2>
          <div className="mt-2 text-gray-600" id="server-response">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const fetchServerData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  document.getElementById('server-response')!.innerText = JSON.stringify(data);
};

React.useEffect(() => {
  fetchServerData();
}, []);

export default App;
