import React from 'react';

const App = () => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    return await response.json();
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun + Tailwind!</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Data from Server:</h2>
        <ul className="space-y-2">
          {data.map((item: any, index: number) => (
            <li key={index} className="border-b py-2">
              <span className="font-medium">{item.name}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
