import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700">Your fullstack app is ready to go!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Client Component</h2>
          <p className="text-gray-600">React components styled with Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">API Integration</h2>
          <p className="text-gray-600">Fetch data seamlessly with Bun!</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Server-Side Rendering</h2>
          <p className="text-gray-600">Enjoy fast server-side rendering with Bun.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
