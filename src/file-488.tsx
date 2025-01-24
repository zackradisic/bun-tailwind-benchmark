import React from "react";

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + TailwindCSS</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a showcase of how to build a fullstack application with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Server-Side</h2>
          <p className="text-gray-600">
            With Bun's HTTP server, you can handle API requests easily. The fetch method handles incoming requests effectively.
          </p>
          <code className="block bg-gray-200 p-2 rounded mt-2">
            {`async fetch(req) {
  if (req.url.endsWith("/api/users")) {
    const users = await Bun.sql\`SELECT * FROM users\`;
    return Response.json(users);
  }
  return new Response("Not Found", { status: 404 });
}`}
          </code>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Client-Side</h2>
          <p className="text-gray-600">
            Render your app using React with seamless integration of TailwindCSS for styling.
          </p>
          <code className="block bg-gray-200 p-2 rounded mt-2">
            {`document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});`}
          </code>
        </section>
      </div>
    </main>
  );
};

export default App;
