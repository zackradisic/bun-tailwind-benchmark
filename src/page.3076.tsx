import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Bun App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Data from the server:</h2>
          <div id="data" className="border-t border-gray-200 pt-4 text-gray-700">
            {/* This will be populated with data from the server */}
          </div>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={fetchData}>
          Fetch Data
        </button>
      </main>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>© 2023 My Bun Application. All Rights Reserved.</p>
      </footer>
    </div>
  );

  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    const dataDisplay = document.getElementById('data');
    if (dataDisplay) {
      dataDisplay.textContent = JSON.stringify(data, null, 2);
    }
  }
};

export default App;
