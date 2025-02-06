import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [serverResponse, setServerResponse] = useState("");
  const [buildTime, setBuildTime] = useState(0);

  useEffect(() => {
    const start = performance.now();
    fetch("/api/hello")
      .then(res => res.text())
      .then(text => {
        setServerResponse(text);
        setBuildTime(performance.now() - start);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-gray-700">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack App
          </h1>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Server Response</h2>
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                <div className="font-mono bg-gray-950 rounded p-4">
                  <p className="text-green-400">{serverResponse}</p>
                </div>
              )}
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-violet-400">Build Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-950 rounded p-4">
                  <p className="text-sm text-gray-400">Request Time</p>
                  <p className="text-xl font-mono text-violet-400">{buildTime.toFixed(2)}ms</p>
                </div>
                <div className="bg-gray-950 rounded p-4">
                  <p className="text-sm text-gray-400">Bundle Size</p>
                  <p className="text-xl font-mono text-violet-400">~12kb</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Features</h2>
              <ul className="space-y-2">
                {["TypeScript Support", "React Fast Refresh", "Tailwind CSS", "ESM Imports"].map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
