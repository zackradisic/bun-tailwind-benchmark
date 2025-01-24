import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun & Tailwind Integration!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the ease of building fullstack applications with React & TypeScript.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Server Part</h2>
          <p className="mt-2 text-gray-600">
            Handle API requests effortlessly with Bun's fast server.
          </p>
          <code className="block mt-4 p-2 bg-gray-200 rounded">
            async fetch(req) &#123;<br />
            &nbsp;&nbsp; if (req.url.endsWith("/api/data")) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp; // API logic here<br />
            &nbsp;&nbsp; &#125;<br />
            &#125;
          </code>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-500">Client Part</h2>
          <p className="mt-2 text-gray-600">
            Render components quickly and easily with React.
          </p>
          <code className="block mt-4 p-2 bg-gray-200 rounded">
            const App = () => &#123;<br />
            &nbsp;&nbsp; return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;Hello from React!&lt;/div&gt;<br />
            &nbsp;&nbsp; );<br />
            &#125;
          </code>
        </div>
      </div>
    </div>
  );
};

export default App;
