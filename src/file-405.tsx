import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-5">Welcome to Bun & Tailwind</h1>
      <p className="text-xl text-gray-700 mb-10">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl">
        <div className="p-5 border rounded-lg shadow-md bg-white">
          <h2 className="text-3xl font-bold text-green-600 mb-3">Server Part</h2>
          <pre className="bg-gray-100 p-3 rounded-lg">
            {`Bun.serve({
  static: {
    "/": homepage,
    "/dashboard": dashboard,
  },
  async fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return new Response(JSON.stringify({ message: "Hello from the server!" }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});`}
          </pre>
        </div>

        <div className="p-5 border rounded-lg shadow-md bg-white">
          <h2 className="text-3xl font-bold text-purple-600 mb-3">Client Part</h2>
          <pre className="bg-gray-100 p-3 rounded-lg">
            {`useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));
}, []);`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
