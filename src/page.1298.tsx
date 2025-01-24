import React from 'react';

const FastFullstackApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack Development!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications with Bun, React, and TypeScript has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Client Side</h2>
          <p className="text-gray-600">React components render quickly, thanks to Bun's integration.</p>
          <pre className="bg-gray-200 p-4 rounded text-sm">
            {`import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<FastFullstackApp />);`}
          </pre>
        </div>
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">Server Side</h2>
          <p className="text-gray-600">API responses are incredibly fast using Bun's built-in server capabilities.</p>
          <pre className="bg-gray-200 p-4 rounded text-sm">
            {`Bun.serve({
  fetch(req) {
    return new Response("Hello from the Bun server!", { status: 200 });
  }
});`}
          </pre>
        </div>
      </div>
      <footer className="mt-8 p-4 bg-blue-500 text-white rounded">
        <p>Start building your Bun application today!</p>
      </footer>
    </div>
  );
};

export default FastFullstackApp;
