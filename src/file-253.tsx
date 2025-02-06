import "./style.css";
// App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">Creating a fullstack app has never been easier.</p>
      <div className="mt-10 p-5 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600">Features</h2>
        <ul className="list-disc list-inside mt-3">
          <li className="mt-2 text-md text-gray-800">🚀 Fast setup with Bun</li>
          <li className="mt-2 text-md text-gray-800">✨ Seamless Tailwind integration</li>
          <li className="mt-2 text-md text-gray-800">🛠️ Build both server and client easily</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
