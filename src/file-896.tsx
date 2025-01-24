import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4 shadow-lg">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-white mb-8 max-w-md text-center">
        Experience the speed and simplicity of building fullstack applications using Bun's new Tailwind integration.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Fast Development</h2>
          <p className="text-gray-700">Rapidly create and iterate on your applications with Bun's live reloading features.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Easy Integration</h2>
          <p className="text-gray-700">Seamlessly integrate with HTML and static files for a cohesive development experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Fullstack Ready</h2>
          <p className="text-gray-700">Build and deploy your frontend and backend in one unified app.</p>
        </div>
      </div>
      <footer className="mt-12">
        <p className="text-white text-sm">Powered by <span className="font-semibold">Bun</span> & <span className="font-semibold">Tailwind CSS</span></p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
