import "./style.css";
import { useState, useEffect } from "react";

export default function BunSpeedDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/api/speed");
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun + React = 🚀
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Fullstack TypeScript apps at lightspeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-purple-400 mr-2">⚡️</span>
              Server Side
            </h2>
            <div className="space-y-3 text-gray-300">
              <code className="block bg-gray-900 p-3 rounded">
                {`Bun.serve({
  static: {
    "/": html
  },
  fetch: async (req) => {
    return Response.json(["So Fast!", "Much Speed"])
  }
})`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-pink-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-pink-400 mr-2">🎨</span>
              Client Side
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                data.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 p-4 rounded-lg text-gray-300 transform hover:scale-105 transition-all"
                  >
                    {item}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-full font-bold shadow-lg">
            <span>Get Started</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
