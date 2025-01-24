import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-5 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-10 p-5">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started with Bun!</h2>
          <p className="text-gray-600 mb-4">
            This is a demo application showcasing how quickly you can integrate Tailwind CSS with Bun's fullstack capabilities.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="mt-10 py-4 bg-blue-600 text-white w-full text-center">
        <p>Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
