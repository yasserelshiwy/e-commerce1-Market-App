/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const cartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  // ^==== add product to cart  ====>

  function addToCart(items, id) {
    const newItems = { ...items, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      toast.success("The product has been added to cart");
    } else {
      setCart([...cart, newItems]);
    }
  }
  // *==== remove product from cart  ====>

  function removeFromCart(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
    toast.success("The product has been deleted from cart");
  }
  // *==== remove All cart  ====>
  function removeAllCart(id) {
    setCart([]);
    toast.success("All products have been deleted. ");
  }
  // *==== increase amount ====>
  function increaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }
  // *==== decrease amount ====>

  function decreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }
  // *==== totle price state ====>
  const [total, setTotle] = useState(0);
  // *==== totle price ====>
  useEffect(() => {
    const total = cart.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);
    setTotle(total);
  }, [cart]);

  // *==== item amount state ====>

  const [itemamount, setItemamount] = useState(0);
  // &==== updete item amount ====>
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);
      setItemamount(amount);
    }
  }, [cart]);

  return (
    <cartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        removeAllCart,
        increaseAmount,
        decreaseAmount,
        itemamount,
        total,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
