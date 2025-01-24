import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">This is a fast fullstack application!</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="p-6 bg-white border border-gray-300 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium">Client Side</h3>
            <p className="mt-2 text-gray-600">The client renders smoothly with Bun and uses Tailwind for styling.</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
              Fetch Data
            </button>
          </div>
          <div className="p-6 bg-white border border-gray-300 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium">Server Side</h3>
            <p className="mt-2 text-gray-600">API calls can be handled seamlessly with Bun's fetch function.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Call API
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-10 p-5 text-center border-t border-gray-300">
        <p className="text-gray-600">Made with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
