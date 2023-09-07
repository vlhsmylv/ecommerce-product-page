import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartSnap: 0,
  cart: 0,
  showCart: false,
  toggleShowCart: () => {
    set((state) => ({ showCart: !state.showCart }));
  },
  addProduct: () =>
    set((state) => ({
      cartSnap: (state.cartSnap += 1),
    })),
  reduceProduct: () =>
    set((state) => ({
      cartSnap: state.cartSnap !== 0 ? (state.cart -= 1) : state.cart,
    })),
  addToCart: () => {
    set((state) => ({
      cart: (state.cart += state.cartSnap),
    }));
  },
  removeCartSnap: () => {
    set(() => ({
      cartSnap: 0,
    }));
  },
  removeCart: () => {
    set(() => ({
      cart: 0
    }));
  }
}));
