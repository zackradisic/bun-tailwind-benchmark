import React from "react";

const BunFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Fast & Simple Fullstack with Bun!</h1>
      <p className="text-xl mb-8">Experience the power of Bun's fullstack capabilities.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 rounded-lg shadow-lg bg-white text-black">
          <h2 className="text-3xl font-semibold mb-2">Frontend and Backend</h2>
          <p>Bun allows you to run your frontend and backend in the same app effortlessly!</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white text-black">
          <h2 className="text-3xl font-semibold mb-2">Rapid Development</h2>
          <p>With hot reloads and detailed error messages, you can develop faster than ever!</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white text-black">
          <h2 className="text-3xl font-semibold mb-2">Tailwind CSS Integration</h2>
          <p>Style your components with Tailwind CSS for a modern, responsive design.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white text-black">
          <h2 className="text-3xl font-semibold mb-2">Simple API Management</h2>
          <p>Handle API requests seamlessly with Bun's fetch capabilities.</p>
        </div>
      </div>
      <footer className="mt-10 text-sm">
        <p>&copy; {new Date().getFullYear()} Bun Fullstack Demo</p>
      </footer>
    </div>
  );
};

export default BunFullstackDemo;
