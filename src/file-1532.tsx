import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-8">This is a simple fullstack application.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-600">Backend</h2>
          <p className="text-gray-600">API endpoint: <code>/api/users</code></p>
          <p className="mt-2 text-gray-500">Fetch data directly from your server with Bun!</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-purple-600">Frontend</h2>
          <p className="text-gray-600">Rendered with React and TypeScript.</p>
          <p className="mt-2 text-gray-500">Utilizing Tailwind CSS for beautiful styles!</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Made with ❤️ using Bun and TailwindCSS.</p>
      </footer>
    </div>
  );
};

export default App;
