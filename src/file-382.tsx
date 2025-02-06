import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full p-6 bg-blue-600 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to My Bun App</h1>
      </header>
      <main className="flex-1 w-full p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Client Component</h2>
            <p className="mt-2 text-gray-700">
              This part renders on the client-side using React.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Server Component</h2>
            <p className="mt-2 text-gray-700">
              This part fetches data from the server.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">API Calls</h2>
            <p className="mt-2 text-gray-700">
              This component interacts with API endpoints.
            </p>
          </div>
        </div>
      </main>
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2023 My Bun App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
