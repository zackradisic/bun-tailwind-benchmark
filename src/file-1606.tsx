import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-md w-full p-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex-1 w-full p-8 flex flex-col items-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Build Fullstack with React & TypeScript</h2>
          <p className="text-gray-600 mb-6">Experience the speed and simplicity of using Bun for fullstack applications. Our integration with TailwindCSS makes styling your components a breeze!</p>
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Get Started</button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4 text-center">
        <p>&copy; {(new Date()).getFullYear()} Bun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
