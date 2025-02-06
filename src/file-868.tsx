import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Fast Fullstack with Bun and Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Hello, Bun Developer!</h2>
          <p className="text-gray-700 text-lg">
            This is a demonstration of how quickly you can build fullstack applications with 
            <span className="font-bold text-blue-500"> Bun</span>, 
            <span className="font-bold text-blue-500"> React</span>, and 
            <span className="font-bold text-blue-500"> TypeScript</span> using the new 
            <span className="font-bold text-blue-500"> bun-plugin-tailwind</span> integration.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
      </main>
      <footer className="mt-8">
        <p className="text-gray-600">Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
