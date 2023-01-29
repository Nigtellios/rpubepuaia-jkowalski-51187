export const addProduct = "addProduct";
export const removeProduct = "removeProduct";

const CartMethods = {
  addToCart: (
    product: any,
    state: any
  ) => {
    const updatedCart = [...state.cart];

    console.log(product);

    const updatedItemIndex = updatedCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push(
        {
          ...product,
          quantity: 1
        }
      );
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };

      updatedItem.quantity += 1;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      cart: updatedCart
    };
  },

  removeFromCart: (
    productId: number,
    state: any
  ) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item: any) => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };

    updatedItem.quantity -= 1;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      cart: updatedCart
    };
  },

  cartReducer: (
    state: any,
    action: any
  ) => {
    switch (action.type) {
      case addProduct:
        return CartMethods.addToCart(
          action.product,
          state
        );
      case removeProduct:
        return CartMethods.removeFromCart(
          action.productId,
          state
        );
      default:
        return state;
    }
  }
}

export default CartMethods;
