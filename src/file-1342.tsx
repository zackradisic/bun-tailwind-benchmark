import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md">
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Fast fullstack development with{" "}
              <span className="font-bold">Bun</span> and{" "}
              <span className="font-bold">React</span>
            </li>
            <li className="mb-2">
              Built-in support for <span className="font-bold">TailwindCSS</span>
            </li>
            <li className="mb-2">
              API routes handled seamlessly with{" "}
              <span className="font-bold">Bun's HTTP server</span>
            </li>
          </ul>
        </section>
        <button className="mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ease-in-out duration-200">
          Start Building
        </button>
      </main>
    </div>
  );
};

export default App;
