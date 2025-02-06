import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">Quickly create stunning fullstack applications.</p>
      <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-200 focus:outline-none">
        Get Started
      </button>
      <div className="mt-8 p-4 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-500">Server Response:</h2>
        <p className="text-gray-700" id="serverResponse">Fetching response...</p>
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('root');
  if (root) {
    const response = await fetch('/api/users');
    const data = await response.json();
    document.getElementById('serverResponse')!.textContent = JSON.stringify(data);
    root.innerHTML = '';
    ReactDOM.createRoot(root).render(<App />);
  }
});

export default App;
