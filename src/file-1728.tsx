import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [demoText, setDemoText] = useState("Starting demo...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/demo");
        const data = await res.json();
        setServerMessage(data.message);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-lg p-8 backdrop-blur-sm border border-gray-700 shadow-xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Bun Fullstack Demo
          </h1>
          
          <div className="space-y-6">
            <div className="bg-black/20 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Server Component</h2>
              <div className="font-mono bg-black/40 p-4 rounded-md">
                {loading ? (
                  <div className="animate-pulse h-6 bg-gray-700 rounded w-3/4" />
                ) : (
                  <pre className="text-green-400">{serverMessage}</pre>
                )}
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-pink-300">Client Demo</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  className="w-full bg-black/40 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="font-mono bg-black/40 p-4 rounded-md">
                  <pre className="text-pink-400">{demoText}</pre>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Performance Stats</h2>
              <div className="grid grid-cols-3 gap-4">
                {["Bundle Size", "Load Time", "Server Response"].map((stat) => (
                  <div key={stat} className="bg-black/40 p-4 rounded-md text-center">
                    <p className="text-gray-400 text-sm mb-1">{stat}</p>
                    <p className="text-2xl font-bold text-green-400">
                      {loading ? "..." : Math.random().toFixed(2) + "ms"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
