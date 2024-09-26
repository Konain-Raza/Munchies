import React from "react";
import Hero from "../components/Hero";
import Code from "../components/Code";
import CodeSnippet from "../components/CodeSnippet";
import Footer from "../components/Footer";

const Documentation = () => {
  const domain = "https://munchies-v1.vercel.app"; // Define the domain variable

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-black transition duration-300 ease-in-out h-max min-h-screen">
      <section className="md:w-full p-4 overflow-y-auto h-screen overflow-x-hidden scrollbar-hide">
        <Hero />
        <h2
          className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          id="api-endpoints"
        >
          ⚙️ API Endpoints
        </h2>

        {/* GET Methods */}
        <h3
          id="get-methods"
          className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-8"
        >
          🔍 GET Methods
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          The following endpoints allow you to retrieve data from the Munchies API. 📦
        </p>

        {/* Fetch All Munchies */}
        <div
          id="get-all-munchies"
          className="bg-white p-6 rounded-lg shadow-md mb-6 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 transition duration-300"
        >
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🍔 Get All Munchies
          </h4>
          <p>Use this endpoint to fetch a full list of available munchies.</p>
          <Code req="GET" endpoint={`${domain}/munchies`} />
          <p className="mt-2">
            This will return a list of all munchie objects with their corresponding details. 📄
          </p>

          {/* Example Code Block */}
          <h5 className="mt-4 font-semibold">Example Code:</h5>
          <CodeSnippet
            code={`fetch('${domain}/munchies')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchies:', error));`}
          />
        </div>

        {/* Fetch Munchies by Category */}
        <div
          id="get-munchies-by-category"
          className="bg-white p-6 rounded-lg shadow-md mb-6 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 transition duration-300"
        >
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🍱 Get Munchies by Category
          </h4>
          <p>
            Fetch munchies that belong to a specific category using this endpoint.
          </p>
          <Code
            req="GET"
            endpoint={`${domain}/munchies/category/:category`}
          />
          <p className="mt-2">
            Replace <code>:category</code> with the desired munchie category.
          </p>

          {/* Example Code Block */}
          <h5 className="mt-4 font-semibold">Example Code:</h5>
          <CodeSnippet
            code={`const category = 'Snacks'; // example category
fetch(\`${domain}/munchies/category/\${category}\`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchies by category:', error));`}
          />
        </div>

        {/* Fetch Munchie Categories */}
        <div
          id="get-munchies-categories"
          className="bg-white p-6 rounded-lg shadow-md mb-6 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 transition duration-300"
        >
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🍽 Get Munchie Categories
          </h4>
          <p>Use this endpoint to fetch all available munchie categories.</p>
          <Code req="GET" endpoint={`${domain}/munchies/categories`} />
          <p className="mt-2">
            This will return a list of all available categories for munchies. 📂
          </p>

          {/* Example Code Block */}
          <h5 className="mt-4 font-semibold">Example Code:</h5>
          <CodeSnippet
            code={`fetch('${domain}/munchies/categories')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchie categories:', error));`}
          />
        </div>

        {/* POST Methods */}
        <h3
          id="post-methods"
          className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-8"
        >
          ➕ POST Methods
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          These endpoints allow you to create new data entries in the Munchies API. 📝
        </p>

        {/* Add a Munchie */}
        <div
          id="add-munchie"
          className="bg-white p-6 rounded-lg shadow-md mb-6 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 transition duration-300"
        >
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🍕 Add a Munchie
          </h4>
          <p>Use this endpoint to add a new munchie to the database.</p>
          <Code req="POST" endpoint={`${domain}/addmunchie`} />
          <p className="mt-2">Request Body:</p>
          <CodeSnippet
            code={`{
  "name": "Pizza",
  "category": "Snacks",
  "price": 9.99,
  "description": "Delicious cheesy pizza.",
  "imageUrl": "http://example.com/pizza.jpg"
}`}
          />
          <p className="mt-2">
            This request will create a new munchie in the database with the provided details. 🎉
          </p>

          {/* Example Code Block */}
          <h5 className="mt-4 font-semibold">Example Code:</h5>
          <CodeSnippet
            code={`fetch('${domain}/addmunchie', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "Pizza",
    category: "Snacks",
    price: 9.99,
    description: "Delicious cheesy pizza.",
    imageUrl: "http://example.com/pizza.jpg"
  }),
})
.then(response => response.json())
.then(data => console.log('Munchie added:', data))
.catch(error => console.error('Error adding munchie:', error));`}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Documentation;
