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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Bun & Tailwind Demo</h1>
        <nav>
          <a href="/" className="text-white hover:text-gray-200 px-3">Home</a>
          <a href="/dashboard" className="text-white hover:text-gray-200 px-3">Dashboard</a>
        </nav>
      </header>
      <main className="flex flex-col items-center mt-8">
        <h2 className="text-xl font-semibold mb-4">Welcome to Bun with TailwindCSS!</h2>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
          Click Me!
        </button>
        <div className="mt-6 p-4 border border-gray-300 bg-white rounded shadow-md">
          <p className="text-gray-700">Fetch User Data:</p>
          <button onClick={fetchData} className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Load Users
          </button>
        </div>
      </main>
      <footer className="mt-auto p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2023 Bun & Tailwind Integration</p>
      </footer>
    </div>
  );
};

export default App;
