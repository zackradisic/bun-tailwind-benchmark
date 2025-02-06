import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-xl mb-8">This is a fullstack application using React and TypeScript.</p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
        <div className="p-4 border border-gray-300 rounded-lg">
          <p className="text-gray-700">Fetching data... (Check console for API response)</p>
        </div>
      </div>
    </div>
  );
};

// Client-side rendering
if (typeof window !== 'undefined') {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = ''; // Clear any existing content
    const reactRoot = React.createRoot(root);
    reactRoot.render(<App />);
  }
}

export default App;
