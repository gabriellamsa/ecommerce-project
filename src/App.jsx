import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div>
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">WearNova</h1>
      </header>

      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setCategory("all")}
              className={`p-2 ${
                category === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("men's clothing")}
              className={`p-2 ${
                category === "men's clothing"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              Men's Clothing
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("women's clothing")}
              className={`p-2 ${
                category === "women's clothing"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              Women's Clothing
            </button>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-lg font-semibold">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products available
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
