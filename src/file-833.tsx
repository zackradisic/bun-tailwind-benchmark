import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-6">Welcome to Bun with React</h1>
      <p className="text-2xl text-white">{message || 'Loading...'}</p>
      <button className="mt-4 px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-blue-200 transition">
        Fetch New Message
      </button>
    </div>
  );
};

export default App;
