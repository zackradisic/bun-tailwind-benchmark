import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Welcome to My Fullstack App</h1>
      </header>
      
      <main className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="w-full max-w-md">
          {/* Sample list of users */}
          {["Alice", "Bob", "Charlie"].map((user) => (
            <li key={user} className="flex justify-between items-center bg-blue-100 p-3 my-2 rounded-lg shadow">
              <span className="font-medium">{user}</span>
              <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition">
                View Profile
              </button>
            </li>
          ))}
        </ul>
      </main>
      
      <footer className="mt-6 text-gray-600">
        <p>&copy; 2023 My Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
