import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications made easy.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Client-side</h2>
          <p className="text-gray-600">Easily manage your React components with TypeScript and Tailwind classes!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Server-side</h2>
          <p className="text-gray-600">Effortlessly handle requests with Bun's powerful server integration.</p>
        </div>
      </div>

      <footer className="mt-8">
        <p className="text-gray-500">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
}

export default App;
