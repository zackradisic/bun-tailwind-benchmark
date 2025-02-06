import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-100 mb-8">Building fast fullstack apps has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Server</h2>
          <p className="text-gray-700">Handle your API requests effortlessly using Bun's built-in server capabilities.</p>
          <pre className="bg-gray-100 rounded p-4 mt-2 overflow-x-auto">
            {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/data")) {
      const data = { message: "Hello from the server!" };
      return Response.json(data);
    }
    return new Response("Not Found", { status: 404 });
  },
});`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Client</h2>
          <p className="text-gray-700">Render dynamic content with React seamlessly integrated with Bun.</p>
          <pre className="bg-gray-100 rounded p-4 mt-2 overflow-x-auto">
            {`import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  // Fetch data from the server
  React.useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Hello, World!</div>;
};

createRoot(document.getElementById("root")).render(<App />);`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
