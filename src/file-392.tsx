import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<{speed: number}>({ speed: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speed")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-50 border border-gray-700">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Bun Fullstack App
              </h1>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 font-mono">Connected</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Server Component</h2>
                <pre className="font-mono text-sm bg-black bg-opacity-50 p-4 rounded">
                  {`Bun.serve({
  static: {
    "/": html,
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/speed"))
      return Response.json({speed: 1.2})
  }
})`}
                </pre>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-pink-400">Client Data</h2>
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-6 w-24 bg-gray-700 rounded"></div>
                  </div>
                ) : (
                  <div className="font-mono">
                    <span className="text-gray-400">Speed: </span>
                    <span className="text-pink-400">{data.speed}ms</span>
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing at Bun Speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
