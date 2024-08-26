import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

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

  const menProducts = products.filter(
    (product) => product.category === "men's clothing"
  );
  const womenProducts = products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <div>
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">WearNova</h1>
      </header>

      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://fakestoreapi.com/carts"
              className="text-white hover:bg-blue-600 px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carts
            </a>
          </li>
          <li>
            <a
              href="https://fakestoreapi.com/auth/login"
              className="text-white hover:bg-blue-600 px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#men"
              className="text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Men's Clothing
            </a>
          </li>
          <li>
            <a
              href="#women"
              className="text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Women's Clothing
            </a>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="men" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Men's Clothing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {menProducts.length > 0 ? (
              menProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No men's clothing available
              </p>
            )}
          </div>
        </section>

        <section id="women">
          <h2 className="text-2xl font-bold mb-4">Women's Clothing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {womenProducts.length > 0 ? (
              womenProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No women's clothing available
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
