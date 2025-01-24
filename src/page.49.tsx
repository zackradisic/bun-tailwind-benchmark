import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/message");
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 mb-8">
              Bun Fullstack Demo
            </h1>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Server Setup</h2>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/message")) {
      return Response.json({ message: "Hello from Bun!" });
    }
  }
})`}
                </pre>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Response</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  {loading ? (
                    <div className="animate-pulse flex space-x-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ) : (
                    <p className="text-gray-800">{message}</p>
                  )}
                </div>
                <button
                  onClick={fetchMessage}
                  className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition duration-200"
                >
                  Refresh
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
                <ul className="space-y-2">
                  {["TypeScript Support", "React Integration", "Built-in Bundling", "Fast Development"].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
