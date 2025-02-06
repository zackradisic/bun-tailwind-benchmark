import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-semibold mb-4">Fast Fullstack Development</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Server-Side</h3>
            <p className="text-gray-700">Utilize Bun's powerful server capabilities to handle requests efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Client-Side</h3>
            <p className="text-gray-700">Leverage React for a dynamic user experience with Tailwind's styling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-700">Easily fetch data from your API endpoints created with Bun.</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Fast Fullstack App with Bun</p>
      </footer>
    </div>
  );
};

export default App;
