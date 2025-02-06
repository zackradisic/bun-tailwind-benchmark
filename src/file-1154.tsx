import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            Bun Fullstack Development
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Build blazing fast React apps with TypeScript & Tailwind
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">Server</h2>
              <div className="bg-gray-900 rounded p-4">
                <pre className="text-sm text-gray-300 font-mono">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Modern"])
    }
  }
})`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Client</h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {data.map((item, i) => (
                      <li 
                        key={i}
                        className="bg-gray-700 px-4 py-2 rounded-md text-gray-200 font-mono"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started with Bun
          </div>
        </div>
      </div>
    </div>
  );
}
