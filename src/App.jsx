// @ts-nocheck
import CartProvider from "./context/cart.context";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./page/Cart/Cart";
import ProductProvider from "./context/product.context";
import Product from "./page/Product/Product";
import WishListProvider from "./context/WishList.context";
import WishList from "./page/WishList/WishList";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product", element: <Product /> },
      { path: "wishList", element: <WishList /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <ProductProvider>
        <WishListProvider>
          <CartProvider>
            <RouterProvider router={router}></RouterProvider>
          </CartProvider>
        </WishListProvider>
        <Toaster position="top-center" />
      </ProductProvider>
    </>
  );
}
