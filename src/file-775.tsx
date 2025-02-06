import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstack() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("/api/data");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Bun Fullstack App
              </h1>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Server-side Code</h2>
                <pre className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">
                    {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Powerful"]);
    }
  }
})`}
                  </code>
                </pre>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Client-side Data</h2>
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {data.map((item, i) => (
                      <li
                        key={i}
                        className="text-white bg-white/5 rounded px-4 py-2 transform hover:scale-105 transition-transform"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={fetchData}
                className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold py-3 px-6 rounded-lg 
                          transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/25"
              >
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
