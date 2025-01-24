import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500">Welcome to Bun & Tailwind!</h1>
        <p className="mt-4 text-gray-600 text-center">
          Experience the speed of Bun with the styling power of TailwindCSS.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <footer className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} My Awesome App
        </footer>
      </div>
    </div>
  );
};

export default App;
