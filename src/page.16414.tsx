import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full text-center p-4 shadow-md">
        <h1 className="text-3xl font-bold">Welcome to My Bun & Tailwind App!</h1>
      </header>
      <main className="mt-8 max-w-xl w-full">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg text-gray-700">Fast server setup with Bun</li>
            <li className="text-lg text-gray-700">Effortless Tailwind CSS integration</li>
            <li className="text-lg text-gray-700">Fullstack capabilities</li>
            <li className="text-lg text-gray-700">Real-time updates with Bun’s dev server</li>
          </ul>
        </section>
        <section className="mt-8 bg-green-50 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-2">API Request Example</h2>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Users
          </button>
        </section>
      </main>
      <footer className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center p-4">
        <p className="text-sm">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
