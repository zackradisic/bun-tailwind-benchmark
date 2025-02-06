import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4">
        <h1 className="text-3xl font-bold">Welcome to Bun with TailwindCSS!</h1>
      </header>
      <main className="flex flex-col items-center">
        <p className="mt-6 text-lg text-gray-800">This is a simple fullstack application.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Server-Side Rendering</h2>
            <p className="text-gray-600">Bun serves this HTML page directly!</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Fast API Fetching</h2>
            <p className="text-gray-600">Fetch data from the server effortlessly.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Responsive Design</h2>
            <p className="text-gray-600">Tailwind makes it easy to design responsive UIs!</p>
          </div>
        </div>
      </main>
      <footer className="mt-6 p-4 bg-gray-200 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Bun Fullstack Application</p>
      </footer>
    </div>
  );
};

export default App;
