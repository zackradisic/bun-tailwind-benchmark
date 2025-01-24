import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind CSS!</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 m-4">
          <h2 className="text-2xl font-semibold mb-4">Bun Fullstack App</h2>
          <p className="text-gray-700 mb-4">
            This is a fullstack application powered by Bun, React, and TypeScript. 
            It's fast, modern, and utilizes Tailwind CSS for styling!
          </p>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            onClick={handleClick}
          >
            Click Me!
          </button>
        </div>
      </main>
      <footer className="bg-blue-600 text-white w-full p-4 text-center">
        <p>This footer is styled with Tailwind CSS!</p>
      </footer>
    </div>
  );

  function handleClick() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => console.log(data));
  }
};

export default App;
