import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(messages => {
        setData(messages);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Demo
            </h1>
            <p className="mt-2 text-gray-400">Built with Bun + React + TypeScript</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 font-mono">Server Running</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Server Code
            </h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-300">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch(req) {
    if (req.url.endsWith("/api/messages")) {
      return Response.json(["Hello", "from", "Bun"]);
    }
  }
});`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Client Data
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {data.map((item, i) => (
                    <div 
                      key={i}
                      className="bg-gray-900 p-3 rounded-md text-sm font-mono text-gray-300 transform hover:scale-102 transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
