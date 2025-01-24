import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Let's build some fullstack magic together!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600 mt-2">
            This is where your React components render, powered by Bun's bundler.
          </p>
          <pre className="mt-4 p-3 bg-gray-100 rounded overflow-x-auto">
            {`import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
});`}
          </pre>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600 mt-2">
            Handle your API requests with Bun's server capabilities.
          </p>
          <pre className="mt-4 p-3 bg-gray-100 rounded overflow-x-auto">
            {`Bun.serve({
  fetch(req) {
    const users = await fetch('/api/users');
    return new Response(JSON.stringify(users), { status: 200 });
  }
});`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
