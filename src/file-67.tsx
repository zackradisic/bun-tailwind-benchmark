import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">This is a fullstack application built with Bun, React, and TypeScript.</p>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">API Data Fetching</h2>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={fetchData}
        >
          Fetch Users
        </button>

        <div id="user-list" className="mt-4">
          {/* Users will be rendered here */}
        </div>
      </div>
    </div>
  );

  async function fetchData() {
    const response = await fetch('/api/users');
    const users = await response.json();
    const userList = users.map((user: any) => (
      <div key={user.id} className="p-2 border-b border-gray-200">{user.name}</div>
    ));
    document.getElementById('user-list')!.innerHTML = '';
    userList.forEach(user => {
      document.getElementById('user-list')!.appendChild(user);
    });
  }
};

export default App;
