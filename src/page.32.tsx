export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-4">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun
            </div>
            <div className="text-6xl">🚀</div>
          </div>

          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Fullstack React + TypeScript in One Command</h2>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <code className="text-green-400">$ bun run app.tsx</code>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-2">⚡️</span> 
                Server Code
              </h3>
              <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-blue-400">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json({
        speed: "blazingly fast"
      });
    }
  }
});`}
                </code>
              </pre>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Client Code  
              </h3>
              <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-pink-400">
                  {`import {createRoot} from "react-dom/client";
createRoot(document.getElementById("root"))
  .render(<App />);`}
                </code>
              </pre>
            </div>
          </div>

          <div className="animate-bounce mt-8">
            <div className="text-4xl">👇</div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-[2px] rounded-xl">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">That's it! Your app is running!</h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="px-4 py-2 bg-white/10 rounded-lg">
                  <span className="text-sm font-medium">Server + Client</span>
                </div>
                <div className="px-4 py-2 bg-white/10 rounded-lg">
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="px-4 py-2 bg-white/10 rounded-lg">
                  <span className="text-sm font-medium">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
