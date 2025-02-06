import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4">
        <h1 className="text-3xl text-center font-bold">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-grow w-full p-8">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get Started Fast</h2>
          <p className="text-lg mb-2">
            With Bun's Tailwind integration, you can create beautiful UIs quickly.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Fast Development</h3>
              <p className="text-gray-700">
                Live reload and hot module replacement ensure that you can see changes as you make them.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Fullstack Power</h3>
              <p className="text-gray-700">
                Combine frontend and backend functionalities seamlessly without any hassle.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-200 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Bun Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
