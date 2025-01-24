import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <header className="bg-white shadow-md rounded-lg p-6 mb-5 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Bun + Tailwind</h1>
        <p className="text-gray-600">Fast and seamless fullstack development</p>
      </header>
      <main className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Data Fetch Example</h2>
        <div className="space-y-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Fetch Users
          </button>
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-medium">Users:</h3>
            <ul className="space-y-2 text-gray-700">
              {/* User data from server would be displayed here */}
            </ul>
          </div>
        </div>
      </main>
      <footer className="mt-5 text-center text-gray-600">
        Built with ❤️ using Bun and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
