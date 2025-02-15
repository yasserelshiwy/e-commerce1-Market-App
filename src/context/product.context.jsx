/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useState } from "react";
const allProduct1 = "/products";

export const productContext = createContext(null);
export default function ProductProvider({ children }) {
  // ^=== filter by category state  ====>

  const [flterProduct, setFlterProduct] = useState(allProduct1);
  // ~=== GET ALL DATA AND FILTER ====>

  const [allProduct, setAllProduct] = useState(null);
  async function getProuduct() {
    const options = {
      url: `https://fakestoreapi.com${flterProduct}`,
      method: "GET",
    };
    let { data } = await axios.request(options);

    setAllProduct(data);
  }
  return (
    <productContext.Provider
      value={{ getProuduct, allProduct, setFlterProduct, flterProduct }}
    >
      {children}
    </productContext.Provider>
  );
}
