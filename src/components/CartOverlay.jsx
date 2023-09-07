import { useCartStore } from "../zustand/cart";

const CartOverlay = () => {
  const showCart = useCartStore((state) => state.showCart);
  const toggleShowCart = useCartStore((state) => state.toggleShowCart);

  if (showCart) {
    return (
      <div
        onClick={toggleShowCart}
        className="z-[998] fixed w-full h-screen bg-black opacity-[.85]"
      />
    );
  }
};

export default CartOverlay;
