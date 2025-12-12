import { Navbar, Footer } from "./components";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark min-h-screen bg-gray-900" : "min-h-screen bg-gray-100"}>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100"></h1>
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 transition"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error.message}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded shadow p-4">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;