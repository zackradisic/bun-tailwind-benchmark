import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Bun + Tailwind Example</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
        <div className="mt-5 space-y-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">User List:</h2>
            <ul className="list-disc pl-5">
              {/* Assuming user data will be listed here */}
            </ul>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-4 bg-gray-800 text-white text-center">
        <p>Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
