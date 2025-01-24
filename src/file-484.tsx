import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const handleFetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <button onClick={handleFetchUsers} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Fetch Users
      </button>
      <p className="mt-4 text-lg text-gray-700">Click the button to fetch user data from the server.</p>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
});

export default App;
