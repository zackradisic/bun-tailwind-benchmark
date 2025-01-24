import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun Fullstack App</h1>
        <p className="mt-4 text-lg text-gray-700">This is a demo showing Bun with Tailwind integration.</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Server-Side Rendering</h2>
          <p className="mt-2 text-gray-600">Data fetched from the Bun server will render seamlessly on the client-side.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Fetch Data
          </button>
        </div>
        <div className="mt-10 space-y-4">
          <div className="bg-green-100 p-5 rounded-lg shadow">
            <h3 className="font-medium text-lg">Client-Side Interaction</h3>
            <p className="text-gray-600">React components manage their own state and props efficiently!</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Click Me!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
