import React from "react";

function Cart({ cartItems, onRemoveItem }) {
  const handleClose = () => {
    document.body.style.overflow = "auto";
    document.getElementById("cart-modal").style.display = "none";
  };

  return (
    <div
      id="cart-modal"
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="space-y-4 mb-8">
            {" "}
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="bg-red-500 text-white p-2 rounded flex items-center"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mb-8">Your cart is empty.</p>
        )}
        <div className="flex justify-start">
          {" "}
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
