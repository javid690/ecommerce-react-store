import { createContext, useEffect, useState } from "react";

export const UseCart = createContext(null);

function UseCartProvider({ children }) {
  const [cartitem, setCartItem] = useState(() => {
    const saveCart = localStorage.getItem("saveCart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  // 🔥 NEW: notification state
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem("saveCart", JSON.stringify(cartitem));
  }, [cartitem]);

  // Product add 
  const addToCart = (product) => {
    const existing = cartitem.find(item => item.id === product.id);

    if (existing) {
      setCartItem(cartitem.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItem([...cartitem, { ...product, qty: 1 }]);
    }

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return;
    setCartItem(cartitem.map(item =>
      item.id === id ? { ...item, qty: newQty } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItem(cartitem.filter((item) => item.id !== id));
  };

  return (

    <UseCart.Provider
      value={{
        addToCart,
        cartitem,
        updateQty,
        removeFromCart,
        showNotification 
      }}
      
    >
      {children}
    </UseCart.Provider>
  );
}

export default UseCartProvider;