import { createContext, useContext, useReducer, useState } from "react";
import { addProduct, removeProduct } from "./CartMethods";
import CartMethods from "./CartMethods";

const ShopContext = createContext({
  cart: [],
  addToCart: (product: any) => {},
  removeFromCart: (product: any) => {},
});

export function ShopContextProvider({ children }: any) {
  const [cartState, dispatch] = useReducer(CartMethods.cartReducer, { cart: [] });

  console.log("CART STATE: ")
  console.log(cartState);

  const addToCart = (product: any) => {
    setTimeout(() => {
      dispatch({
        type: addProduct,
        product: product,
      });
    }, 150)
  };

  const removeFromCart = (productId: number) => {
    setTimeout(() => {
      dispatch({
        type: removeProduct,
        productId: productId,
      });
    }, 150)
  };

  return (
    <ShopContext.Provider value={
      {
        cart: cartState.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }
    }>
      { children }
    </ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
