import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with React & TypeScript!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo application showcasing Bun's incredible performance.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-center">Fast</h2>
          <p className="text-center text-gray-500">Experience lightning-fast server responses.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-center">Simple</h2>
          <p className="text-center text-gray-500">Easily integrate TailwindCSS in your projects.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-center">Fullstack</h2>
          <p className="text-center text-gray-500">Serve both frontend and backend seamlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-center">Modern</h2>
          <p className="text-center text-gray-500">Utilize the latest technologies with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
