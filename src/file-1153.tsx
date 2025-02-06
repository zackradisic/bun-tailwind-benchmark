import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [serverInfo, setServerInfo] = useState({
    message: "",
    latency: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => {
        setServerInfo({
          message: data.message,
          latency: Math.round(performance.now() - start) 
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Bun Fullstack App
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Server Response</h2>
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-gray-300">Message: <span className="text-pink-400">{serverInfo.message}</span></p>
                  <p className="text-gray-300">Latency: <span className="text-green-400">{serverInfo.latency}ms</span></p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Server Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Built-in HTTP Server
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    File-based Routing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Hot Reloading
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Client Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    React + TypeScript
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fast Refresh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
