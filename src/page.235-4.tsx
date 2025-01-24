import React from "react";

const FastBunApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Build Fullstack Apps with Bun ⚡</h1>
      <p className="text-lg text-gray-700 mb-4">Experience the speed and simplicity of Bun's fullstack capabilities.</p>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Start</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-gray-600">Install Bun with <code className="bg-gray-200 p-1 rounded">bun install</code>.</li>
          <li className="text-gray-600">Create your first <code className="bg-gray-200 p-1 rounded">.ts</code>/<code className="bg-gray-200 p-1 rounded">.tsx</code> files.</li>
          <li className="text-gray-600">Run your server with <code className="bg-gray-200 p-1 rounded">bun run app.ts</code>.</li>
          <li className="text-gray-600">Enjoy blazing-fast build and serve times!</li>
        </ol>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Powered by <strong>Bun</strong></p>
      </footer>
    </div>
  );
};

export default FastBunApp;
