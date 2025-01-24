import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a fullstack app powered by Bun, React, and TypeScript.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-500">Component 1</h2>
          <p className="mt-2 text-gray-600">This component showcases how easy it is to integrate Tailwind.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500">Component 2</h2>
          <p className="mt-2 text-gray-600">Utilize Bun's fast server capabilities with seamless API calls.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-500">Component 3</h2>
          <p className="mt-2 text-gray-600">Build your applications swiftly and efficiently.</p>
        </div>
      </div>
      <footer className="mt-12">
        <p className="text-gray-500">Powered by Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
