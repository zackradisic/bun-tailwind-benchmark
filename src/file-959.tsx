import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [apiData, setApiData] = useState<{message: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/messages")
      .then(res => res.json())
      .then(data => {
        setApiData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Bun Fullstack Demo
          </h1>
          
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-300">Server Features</h2>
              <div className="space-y-2">
                {["Built-in bundling", "API routes", "Static file serving", "TypeScript support"].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-purple-400"/>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-300">API Response</h2>
              <div className="bg-black/50 rounded-lg p-4">
                {isLoading ? (
                  <div className="animate-pulse h-20 bg-white/5 rounded"/>
                ) : (
                  <pre className="font-mono text-sm">
                    {JSON.stringify(apiData, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded-lg font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Powered by Bun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
