/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const wishContext = createContext(null);

export default function WishListProvider({ children }) {
  const [wish, setwish] = useState([]);
  // ^==== add product to wish  ====>

  function addTowish(items, id) {
    const newItems = { ...items, amount: 1 };
    const wishItem = wish.find((item) => {
      return item.id === id;
    });
    if (wishItem) {
      const newwish = [...wish].map((item) => {
        if (item.id === id) {
          return { ...item, amount: wishItem.amount + 1 };
        } else {
          return item;
        }
      });
      setwish(newwish);
      toast.success("Product added successfully to your wishlist ❤");
    } else {
      setwish([...wish, newItems]);
    }
  }

  // *==== remove product from wish  ====>

  function removeFromwish(id) {
    const newwish = wish.filter((item) => {
      return item.id !== id;
    });
    setwish(newwish);
    toast.success("The product has been deleted from wishlist ❤");
  }
  // *==== remove All wish  ====>
  function removeAllwish(id) {
    setwish([]);
  }

  // *==== totle price state ====>
  const [total, setTotle] = useState(0);
  // *==== totle price ====>
  useEffect(() => {
    const total = wish.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);
    setTotle(total);
  }, [wish]);

  // *==== item amount state ====>

  const [wishitemamount, setWishitemamount] = useState(0);
  // &==== updete item amount ====>
  useEffect(() => {
    if (wish) {
      const amount = wish.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);
      setWishitemamount(amount);
    }
  }, [wish]);
  return (
    <wishContext.Provider
      value={{
        addTowish,
        wish,
        removeFromwish,
        removeAllwish,

        wishitemamount,
        total,
      }}
    >
      {children}
    </wishContext.Provider>
  );
}
