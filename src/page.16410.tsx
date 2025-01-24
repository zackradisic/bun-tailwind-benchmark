import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-2xl font-bold py-4 px-6 rounded-lg shadow-lg">
        Welcome to Bun + React + TailwindCSS
      </header>
      <main className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Fast Development</h2>
            <p className="text-gray-700">
              Experience lightning-fast build times with Bun's server integration.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Seamless Integration</h2>
            <p className="text-gray-700">
              Easily connect your backend APIs with the frontend using Bun's fetch method.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">TailwindCSS Magic</h2>
            <p className="text-gray-700">
              Utilize utility-first CSS to speed up your design process and keep your styles maintainable.
            </p>
          </div>
        </div>
      </main>
      <footer className="mt-6 text-center">
        <p className="text-gray-600">Built with ❤️ using Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
