import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold">🥟 Bun Fullstack</div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Server Side */}
          <div className="rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-green-500/10 text-green-500 p-2 rounded-lg mr-2">🖥️</span>
              Server
            </h2>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage,
    "/dashboard": dashboard,
  },
  async fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json({
        speed: "🚀 Super Fast!"
      });
    }
  }
})`}
              </code>
            </pre>
          </div>

          {/* Client Side */}
          <div className="rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-500/10 text-blue-500 p-2 rounded-lg mr-2">🌐</span> 
              Client
            </h2>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`// frontend.tsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
  .render(<App />);`}
              </code>
            </pre>
          </div>

          {/* Features */}
          <div className="md:col-span-2 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "🚀 Zero Config Setup",
                "⚡️ Lightning Fast HMR",
                "🔥 TypeScript Built-in",
                "📦 Automatic Bundling",
                "🎨 CSS/Tailwind Support", 
                "🔧 Production Ready"
              ].map((feature) => (
                <div key={feature} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-700/30 transition-colors">
                  {feature}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
