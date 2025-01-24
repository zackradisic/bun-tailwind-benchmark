import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-white mb-8">Building fullstack applications just got easier!</p>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full px-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Frontend</h2>
          <p className="mt-2 text-gray-600">Use Bun’s inbuilt server to seamlessly create your client-side app with React.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Backend</h2>
          <p className="mt-2 text-gray-600">Easily set up API routes, all within the same Bun server.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Tailwind CSS</h2>
          <p className="mt-2 text-gray-600">Utilize Tailwind's utility classes for rapid UI design and responsiveness.</p>
        </div>
      </div>
      
      <footer className="mt-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Join us on our fast journey!</p>
      </footer>
    </div>
  );
};

export default App;
