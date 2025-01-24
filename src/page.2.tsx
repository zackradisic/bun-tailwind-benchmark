import { useEffect, useState } from "react";

export default function BunSpeedDemo() {
  const [apiData, setApiData] = useState<{message: string; latency: number}>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const start = performance.now();
      const res = await fetch('/api/hello');
      const latency = performance.now() - start;
      const data = await res.json();
      setApiData({message: data.message, latency});
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack Speed
          </h1>
          <p className="text-xl text-gray-300">Blazingly fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-pink-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Server-Side</h2>
            <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    return Response.json({
      message: "Hello from Bun!"
    });
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-violet-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Client-Side</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                <div>
                  <p className="text-green-400 mb-2">✓ API Response: {apiData?.message}</p>
                  <p className="text-yellow-400">⚡ Latency: {apiData?.latency.toFixed(2)}ms</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Hot Reload Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
