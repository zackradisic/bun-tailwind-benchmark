// src/App.tsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-lg mb-6">This is a fullstack app using Bun, React, and TypeScript.</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300">
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;

// In your main entry file, don't forget to render your App component.
// Example: 
// import { createRoot } from "react-dom/client";
// import App from "./App";
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
