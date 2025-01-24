import { FC } from "react";

const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Bun App!</h1>
        <p className="mt-2 text-lg">Built with TailwindCSS, React, and TypeScript</p>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="mt-4 list-disc list-inside">
            <li className="py-1">Fast fullstack development</li>
            <li className="py-1">Seamless integration with TailwindCSS</li>
            <li className="py-1">Instant API responses with Bun's server</li>
          </ul>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Start Building!
        </button>
      </main>
      <footer className="mt-auto bg-gray-800 w-full p-4 text-center text-white">
        <p>Powered by Bun &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
