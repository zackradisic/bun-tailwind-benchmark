import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-lg">
        <h1 className="text-2xl text-white text-center">Welcome to My Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6">Fetch Data from API</h2>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Users
          </button>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600">My Fullstack Application. ©2023</p>
      </footer>
    </div>
  );
};

export default App;
