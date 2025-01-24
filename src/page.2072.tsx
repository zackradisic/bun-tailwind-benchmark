import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700">This is a demo of React with TypeScript using Bun's fullstack capabilities!</p>
      <button className="mt-5 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
        Click Me
      </button>
      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold">Fetch Data from API</h2>
        <button className="mt-3 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300" onClick={fetchData}>
          Fetch Users
        </button>
        <div id="userList" className="mt-4"></div>
      </div>
    </div>
  );

  async function fetchData() {
    const response = await fetch('/api/users');
    const users = await response.json();
    const userList = document.getElementById('userList');
    if (userList) {
      userList.innerHTML = users.map((user: any) => `<div>${user.name}</div>`).join('');
    }
  }
};

export default App;
