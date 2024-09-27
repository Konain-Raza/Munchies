// src/App.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddMunchieForm from "../components/AddMunchie";
import Loader from "../components/Loader"; // Assuming you have a Loader component

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await fetch("https://munchies-v1.vercel.app/munchies");
        const data = await response.json();
        setProducts(data.data);
        const uniqueCategories = [
          ...new Set(data.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = async (category) => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch(
        `https://munchies-v1.vercel.app/munchies/category/${category}`
      );
      const data = await response.json();
      setProducts(data.data);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

  const handleShowAll = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch("https://munchies-v1.vercel.app/munchies");
      const data = await response.json();
      setProducts(data.data);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Error fetching all products:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

  return (
    <div className="min-h-screen" id="demo">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Munchies Playground! 🍽️✨
        </h1>
        <div className="mb-4 flex justify-center space-x-4 overflow-y-scroll scroll-hide w-full">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {category}
            </button>
          ))}
          <button
            onClick={handleShowAll}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            All
          </button>
        </div>
        
        {loading ? ( // Show loader when loading is true
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}

        <AddMunchieForm />
      </div>
    </div>
  );
};

export default App;
