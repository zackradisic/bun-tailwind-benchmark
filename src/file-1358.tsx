import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind CSS!</h1>
      <p className="text-lg text-gray-700 mb-4">Fast fullstack app development made simple!</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-500 mb-2">Server-side</h2>
          <p className="text-gray-600">
            <code className="bg-gray-200 p-1 rounded">Bun.serve()</code> makes it easy to run your backend code and serve HTML routes.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Client-side</h2>
          <p className="text-gray-600">
            Create your app using <strong>React</strong> and render components seamlessly with <code className="bg-gray-200 p-1 rounded">createRoot()</code>.
          </p>
        </div>
      </div>
      
      <footer className="mt-10">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
