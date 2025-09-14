import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Unique ID helper
  const getItemId = (item) => {
    if (item.productType === "combo") {
      return `combo-${item.ring?.id}-${item.diamond?.diamondid}-${item.size}`;
    }
    if (item.productType === "diamond") {
      return `diamond-${item.diamondid}`;
    }
    if (item.productType === "jewelry") {
      return `jewelry-${item.id}`;
    }
    if (item.productType === "build") {
      return `build-${item.id}-${item.size}-${item.diamondtype}`;
    }
  };

  // Add item to cart
  const addToCart = (item) => {
    const itemId = getItemId(item);

    setCartItems((prevCart) => {
      const exists = prevCart.some((i) => getItemId(i) === itemId);
      if (exists) {
        return prevCart.map((i) =>
          getItemId(i) === itemId
            ? { ...i, itemQuantity: i.itemQuantity + 1 }
            : i
        );
      } else {
        return [...prevCart, { ...item, itemQuantity: 1 }];
      }
    });
  };

  // Remove item by ID
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => getItemId(item) !== itemId)
    );
  };

  // Update item quantity
  const updateCartItem = (itemId, itemQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        getItemId(item) === itemId
          ? { ...item, itemQuantity: Math.max(1, itemQuantity) }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate subtotal
  const getSubTotal = () => {
    return cartItems.reduce((total, item) => {
      switch (item.productType) {
        case "diamond":
          return total + item.price * item.itemQuantity;
        case "combo":
          const comboPrice =
            Number(item.ring.price) + Number(item.diamond.price);
          return total + comboPrice * item.itemQuantity;
        case "jewelry":
          const planPrice = item.selectedPlan?.price || 0;
          return total + (item.price + planPrice) * item.itemQuantity;
        case "build":
          const buildPrice = Number(item.price) || 0;
          return total + buildPrice * item.itemQuantity;
        default:
          return total;
      }
    }, 0);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemId,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        getSubTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
