import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMunchieForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formPayload = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      imageUrl: formData.imageUrl,
    };

    try {
      const response = await axios.post(
        "https://munchies-v1.vercel.app/addmunchie",
        formPayload
      );

      if (response.status === 201) {
        console.log("Munchie added successfully:", response.data);
        toast.success("✅ Munchie added successfully!"); 
        // Reset form data
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      console.error("Error adding munchie:", error);
      toast.error("🚨 Error adding munchie."); // Error toast
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <div className="max-w-xl mt-10 mx-auto bg-[#b6bd9f75] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-4">
       Add a New Munchie 🍕
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border dark:border-gray-700 dark:bg-gray-900 bg-[#9aa5756e] dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          placeholder="Name"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border dark:border-gray-700 dark:bg-gray-900 bg-[#9aa5756e] dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border dark:border-gray-700 dark:bg-gray-900 bg-[#9aa5756e] dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border dark:border-gray-700 dark:bg-gray-900 bg-[#9aa5756e] dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          placeholder="Price"
          required
        />
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-3 border dark:border-gray-700 dark:bg-gray-900 bg-[#9aa5756e] dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          placeholder="Image URL"
          required
        />
        <button
          type="submit"
          className={`w-full p-3 text-black dark:text-white font-bold rounded transition duration-200 focus:outline-none focus:ring-2 ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Processing... 🌀" : "Add Munchie"}
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
      />
    </div>
  );
};

export default AddMunchieForm;
