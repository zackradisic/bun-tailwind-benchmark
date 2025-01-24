import React from "react";

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg mb-8">Experience the speed and simplicity of Bun's fullstack capabilities.</p>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">Fast and Simple Setup</h2>
        <pre className="whitespace-pre-wrap mb-4">
          {`import { serve } from "bun";

Bun.serve({
  static: {
    "/": homepage,
  },
  fetch(req) {
    // Handle API requests
  },
});`}
        </pre>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm">
        <p>Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default FastFullstackDemo;
