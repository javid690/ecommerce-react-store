import { createContext, useEffect, useState } from "react";

export const UseWishlist = createContext(null);

function UseWishlistProvider({ children }) {
  const [notification, setnotification] = useState(false);

  const [wishlistItem, setwishlistItem] = useState(() => {
    try {
      const saveWishlist = localStorage.getItem("saveWishlist");
      if (!saveWishlist) return [];
      const parsed = JSON.parse(saveWishlist);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(Boolean);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("saveWishlist", JSON.stringify(wishlistItem));
  }, [wishlistItem]);

  const addToWishlist = (product) => {
    if (!product || !product.id) return;

    setwishlistItem((prev) => {
      const safePrev = Array.isArray(prev) ? prev.filter(Boolean) : [];
      const existing = safePrev.find((item) => item.id === product.id);
      if (existing) return safePrev;
      return [...safePrev, product];
    });

    setnotification(true);
  };

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setnotification(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [notification]);

  const removeFromWishlist = (id) => {
    setwishlistItem((prev) => {
      if (!Array.isArray(prev)) return [];
      return prev.filter((item) => item && item.id !== id);
    });
  };

  return (
    <UseWishlist.Provider
      value={{ addToWishlist, wishlistItem, removeFromWishlist, notification }}
    >
      {children}
    </UseWishlist.Provider>
  );
}

export default UseWishlistProvider;