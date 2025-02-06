import "./style.css";
import React from 'react';

// Client component showcasing Tailwind classes
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications made easy.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
    </div>
  );
};

// Server-side API
export async function fetch(req: Request) {
  if (req.url.endsWith('/api/data')) {
    const data = { message: 'Hello from the server!' };
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  }
  return new Response('Not Found', { status: 404 });
}

export default App;
