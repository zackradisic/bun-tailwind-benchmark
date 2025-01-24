import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Client Side</h2>
          <p className="text-gray-600">Here's where your client-side code lives. It uses React for rendering components.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">Server Side</h2>
          <p className="text-gray-600">Bun serves the API and manages your routes with ease.</p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Powered by Bun &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
