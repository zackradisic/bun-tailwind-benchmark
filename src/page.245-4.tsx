import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
      <h1 className="text-white text-5xl font-bold mb-4">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-white text-2xl mb-8">
        Experience the speed and simplicity of Bun.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-gray-800 text-3xl font-semibold mb-4">Quick Start</h2>
        <p className="text-gray-600 mb-4">
          Using Bun, you can run both backend and frontend seamlessly.
        </p>
        <code className="block bg-gray-200 p-4 rounded font-mono text-sm">
          Bun.serve({`{`} 
          <br />
          &nbsp;&nbsp;static: {`{`} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"/": homepage, <br />
          &nbsp;&nbsp;{`}`}, <br />
          &nbsp;&nbsp;fetch(req) {`{`} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;// Handle your requests here <br />
          &nbsp;&nbsp;{`}`} <br />
          {`}`}
        </code>
      </div>
      <a 
        href="#"
        className="mt-6 text-lg text-blue-500 hover:underline"
      >
        Learn More
      </a>
    </div>
  );
};

export default FastBunDemo;
