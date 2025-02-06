import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [serverTime, setServerTime] = useState("");
  const [buildTime, setBuildTime] = useState(0);

  useEffect(() => {
    const start = performance.now();
    fetch("/api/time")
      .then(res => res.text())
      .then(time => {
        setServerTime(time);
        setBuildTime(performance.now() - start);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://bun.sh/logo.svg" className="h-12 w-12" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-2">
            <span className="font-mono text-green-400">$ bun run dev</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Client</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Build Time</span>
                <span className="font-mono text-pink-400">{buildTime.toFixed(2)}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Bundle Size</span>
                <span className="font-mono text-pink-400">~12kb</span>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                <span className="text-blue-400">import</span>{" "}
                <span className="text-green-400">{"{"} createRoot {"}"}</span>{" "}
                <span className="text-blue-400">from</span>{" "}
                <span className="text-yellow-400">'react-dom/client'</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Server</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Server Time</span>
                <span className="font-mono text-violet-400">{isLoading ? "Loading..." : serverTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Response Time</span>
                <span className="font-mono text-violet-400">~0.2ms</span>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                <span className="text-blue-400">Bun</span>.
                <span className="text-green-400">serve</span>(
                <span className="text-yellow-400">{"{"}</span>{" "}
                <span className="text-pink-400">port:</span> 3000{" "}
                <span className="text-yellow-400">{"}"}</span>)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/30 rounded-lg p-4 text-center text-sm text-gray-400">
          Zero config • TypeScript first • Lightning fast • Built-in bundler
        </div>
      </div>
    </div>
  );
}
