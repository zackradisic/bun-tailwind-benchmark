import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex-1 my-8">
        <section className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">This is a Fullstack App</h2>
          <p className="text-gray-700 mb-4">
            Utilizing Bun's new Tailwind integration makes development faster and simpler than ever.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">🚀 Fast server response with Bun's backend</li>
            <li className="mb-2">🌟 Simple frontend management with React & Tailwind</li>
            <li className="mb-2">🎨 Customizable styles using Tailwind's utility classes</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started!
          </button>
        </section>
      </main>
      <footer className="bg-blue-600 w-full p-2 text-white text-center">
        <p>© 2023 Bun Fullstack App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
