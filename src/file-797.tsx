import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<{message: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun + React Fullstack
          </h1>
          <p className="text-gray-300 text-xl">Lightning fast fullstack development</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="space-y-4">
              <pre className="bg-black/30 p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": html
  },
  async fetch(req) {
    if (req.url.endsWith("/api/messages")) {
      return Response.json([
        { message: "Hello from Bun!" }
      ]);
    }
  }
})`}
              </pre>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex justify-center py-8">
                <div className="w-6 h-6 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"/>
              </div>
            ) : error ? (
              <div className="text-red-400 text-center py-8">{error}</div>
            ) : (
              <div className="space-y-4">
                {data.map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-200">{item.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 transition-colors rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-white font-semibold">Built with Bun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
