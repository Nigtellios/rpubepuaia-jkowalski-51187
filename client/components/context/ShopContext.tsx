import { createContext, useContext } from "react";

const ShopContext = createContext({
  cart: [],
  addToCart: (product: any) => {},
  removeFromCart: (product: any) => {},
});

export function ShopContextProvider({ children }: any) {
  let sharedState = {
    cart: [],
    addToCart: (product: any) => {},
    removeFromCart: (product: any) => {},
  };

  return (
    <ShopContext.Provider value={sharedState}>
      { children }
    </ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
