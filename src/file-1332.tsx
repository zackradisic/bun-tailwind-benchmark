import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack
          </h1>
          <div className="animate-bounce bg-purple-500 p-2 rounded-full">
            🚀
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server Side</h2>
            <pre className="bg-black rounded p-4 text-sm overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if(req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Modern"])
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-pink-500/20 transition">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {data.map((item, i) => (
                  <li 
                    key={i}
                    className="bg-gray-700 px-4 py-2 rounded-lg text-lg font-medium animate-fade-in-up"
                    style={{animationDelay: `${i * 150}ms`}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Built with
            <span className="mx-2 font-mono bg-gray-800 px-2 py-1 rounded">bun create</span>
            in seconds
          </p>
        </div>
      </div>
    </div>
  );
}
