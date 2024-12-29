import React, { createContext, useState } from 'react';

// Create the Products Context
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Function to add a product to the basket
  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      // Check if the product already exists in the basket
      const existingProduct = prevBasket.find((item) => item.id === product.id);

      if (existingProduct) {
        // If product exists, update the quantity
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase the quantity by 1
            : item
        );
      } else {
        // If product doesn't exist, add it to the basket with a quantity of 1
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to update the product quantity in the basket
  const updateProductQuantity = (productId, action) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Function to remove a product from the basket
  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  };

  return (
    <ProductsContext.Provider value={{ basket, addToBasket, updateProductQuantity, removeFromBasket }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
