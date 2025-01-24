import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{
    message: string;
    timestamp: string;
  }>({
    message: "Loading...",
    timestamp: "",
  });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: "Error fetching data", timestamp: "" });
      }
    };
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          ⚡ Bun Fullstack Showcase
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Server Response
            </h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-blue-900">
                Message: {serverData.message}
              </p>
              <p className="text-sm text-blue-600">
                Timestamp: {serverData.timestamp}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Client State
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-4xl font-black text-purple-900">
                {clientCounter}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setClientCounter((c) => c + 1)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  Increment
                </button>
                <button
                  onClick={() => setClientCounter(0)}
                  className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-300 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 🚀 Bun, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
