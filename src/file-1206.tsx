import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<{ count: number }>({ count: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const increment = async () => {
    const res = await fetch("/api/count", {
      method: "POST",
    });
    const newData = await res.json();
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            Bun + React Fullstack
          </h1>

          <div className="mt-16 p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700">
            <div className="flex flex-col items-center gap-8">
              <div className="text-2xl font-medium">
                {loading ? (
                  <div className="animate-pulse bg-gray-700 h-8 w-32 rounded" />
                ) : (
                  <span className="font-mono">Count: {data.count}</span>
                )}
              </div>

              <button
                onClick={increment}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium 
                          transform transition hover:scale-105 hover:shadow-xl active:scale-95
                          disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                Increment Counter
              </button>
            </div>

            <div className="mt-16 space-y-4 text-gray-400">
              <div className="p-4 bg-gray-800 rounded-lg font-mono text-sm">
                <div className="text-pink-400">// Server-side code</div>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg font-mono text-sm">
                <div className="text-green-400">// Client-side code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
