import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-blue-600 text-white p-4 rounded w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-4">
        <p className="text-xl text-gray-700">This is a demo component using TailwindCSS!</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
          Click Me!
        </button>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold">Data from Server:</h2>
          <div className="bg-white shadow-md rounded-md p-4">
            {/* Example of fetching data from API */}
            <p className="text-gray-600">Fetching data...</p>
          </div>
        </div>
      </main>
      <footer className="mt-auto p-4 bg-blue-800 text-white text-center w-full">
        <p>&copy; 2023 Bun Fullstack Example</p>
      </footer>
    </div>
  );
};

export default App;
