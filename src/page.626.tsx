import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full py-6 shadow-lg">
        <h1 className="text-white text-4xl font-bold text-center">Bun & Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-10">
        <section className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800">Fast & Simple Fullstack Development</h2>
          <p className="mt-4 text-gray-600">Build applications with React, TypeScript, and Tailwind CSS effortlessly using Bun!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Get Started</button>
        </section>
        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Server Response</h3>
          {/* Client fetch example */}
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={async () => {
              const response = await fetch('/api/data');
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Data
          </button>
        </section>
      </main>
      <footer className="mt-auto py-4 bg-gray-800 text-white text-center w-full">
        <p>&copy; 2023 Bun Fullstack Example</p>
      </footer>
    </div>
  );
};

export default App;
