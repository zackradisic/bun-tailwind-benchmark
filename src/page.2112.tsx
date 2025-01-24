import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-white text-2xl font-bold text-center">Welcome to Bun!</h1>
      </header>
      <main className="mt-8 w-full max-w-md">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Fast Fullstack Development</h2>
          <p className="text-gray-700 mb-4">
            Build your application with speed and simplicity using Bun's fullstack features. 
            With server and client working seamlessly together, you can focus on creating amazing features!
          </p>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            Get Started
          </button>
        </section>
      </main>
      <footer className="mt-8">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Bun Devs</p>
      </footer>
    </div>
  );
};

export default App;
