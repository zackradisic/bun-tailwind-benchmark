import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-white text-5xl font-bold mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-white text-xl mb-6">Fast, Simple, and Fullstack Development</p>
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-gray-700 text-2xl mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
          Register
        </button>
      </form>
      <footer className="absolute bottom-0 text-white text-sm py-4">
        Powered by Bun and TailwindCSS
      </footer>
    </div>
  );
};

export default App;
