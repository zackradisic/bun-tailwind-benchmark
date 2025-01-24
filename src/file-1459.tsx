import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Bun & Tailwind Integration</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="mt-10 p-6 max-w-md bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Hello from Bun!</h2>
          <p className="mt-2 text-gray-600">
            This component is powered by
            <span className="font-bold text-blue-500"> Tailwind CSS</span> and
            <span className="font-bold text-green-500"> Bun's Fullstack Dev Server</span>.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition">
            Click Me!
          </button>
        </div>
        <footer className="mt-6 text-gray-500">
          <p className="text-sm">Build Fast, Serve Fast with Bun!</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
