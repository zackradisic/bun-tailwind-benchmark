import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 text-white p-4 w-full">
        <h1 className="text-3xl font-bold text-center">Welcome to My Bun App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <p className="text-lg text-gray-800 mb-4">
          This app showcases the power of Bun with React and TypeScript using Tailwind CSS for styling.
        </p>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Click Me!
        </button>
      </main>
      <footer className="mt-auto bg-blue-600 text-white p-4 w-full text-center">
        <p className="text-sm">Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
