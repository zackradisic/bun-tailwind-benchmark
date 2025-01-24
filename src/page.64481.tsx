import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 rounded shadow-md w-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Fullstack App</h1>
      </header>
      <main className="mt-8 w-full max-w-lg">
        <section className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Data</h2>
          <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Fetch Data
          </button>
          <ul className="list-disc pl-5">
            <li className="text-gray-600">Data item 1</li>
            <li className="text-gray-600">Data item 2</li>
            <li className="text-gray-600">Data item 3</li>
          </ul>
        </section>
      </main>
      <footer className="mt-8 bg-gray-200 p-4 rounded w-full text-center">
        <p className="text-gray-700">© 2023 My Fullstack App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
