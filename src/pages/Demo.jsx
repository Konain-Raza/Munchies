// src/App.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddMunchieForm from "../components/AddMunchie";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
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
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = async (category) => {
    try {
      const response = await fetch(
        `https://munchies-v1.vercel.app/munchies/category/${category}`
      );
      const data = await response.json();
      setProducts(data.data);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  const handleShowAll = async () => {
    const response = await fetch("https://munchies-v1.vercel.app/munchies");
    const data = await response.json();
    setProducts(data.data);
    setSelectedCategory(null);
  };

  return (
    <div className=" min-h-screen" id="demo">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          {" "}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <AddMunchieForm/>
      </div>
    </div>
  );
};

export default App;
