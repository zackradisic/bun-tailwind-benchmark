import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="bg-blue-600 w-full p-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-col items-center justify-center text-center p-4">
        <p className="text-lg text-gray-700 mb-4">
          This is a simple fullstack application built with
          <span className="font-semibold text-blue-500"> Bun</span>, 
          <span className="font-semibold text-blue-500"> React</span>, 
          and 
          <span className="font-semibold text-blue-500"> TypeScript</span>.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={async () => {
            const response = await fetch("/api/users");
            const users = await response.json();
            alert(`Fetched ${users.length} users from the server!`);
          }}
        >
          Fetch Users
        </button>
      </main>
      <footer className="w-full p-4 text-center bg-blue-600 text-white absolute bottom-0">
        <p>&copy; 2023 Bun Examples</p>
      </footer>
    </div>
  );
};

export default App;
