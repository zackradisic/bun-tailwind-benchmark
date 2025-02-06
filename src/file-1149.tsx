import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App!</h1>
      </header>
      <main className="flex flex-col items-center mt-5">
        <p className="text-lg text-gray-800 mb-4">This is a demonstration of Bun's seamless integration with TailwindCSS.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
        <div className="mt-6 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-3">Server Response:</h2>
          <div className="text-center">
            {/* Here you can display fetched data from the server */}
            <p className="text-gray-600">Server says: "Hello from Bun!"</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
