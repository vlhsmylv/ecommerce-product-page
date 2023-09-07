import {
  minus,
  plus,
  cart,
  productImageThumbnails,
  trash,
  close,
  checkout,
} from "../assets";
import { useCartStore } from "../zustand/cart";
import { useLightboxStore } from "../zustand/lightbox";

export const AddToCart = () => {
  const userCart = useCartStore((state) => state.cartSnap);
  const addProduct = useCartStore((state) => state.addProduct);
  const reduceProduct = useCartStore((state) => state.reduceProduct);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeCartSnap = useCartStore((state) => state.removeCartSnap);

  return (
    <div id="add-to-cart" className="flex lg:flex-row flex-col lg:gap-3 gap-5">
      <div className="lg:w-[150px] rounded-xl p-4 bg-light-grayish-blue flex justify-between items-center">
        <button onClick={reduceProduct} className="cursor-pointer">
          <img src={minus} alt="Reduce quantity" width={16} height={16} />
        </button>
        <span className="font-semibold text-xl">{userCart}</span>
        <button onClick={addProduct} className="cursor-pointer">
          <img src={plus} alt="Add quantity" width={16} height={16} />
        </button>
      </div>
      <button
        onClick={() => {
          addToCart();
          removeCartSnap();
        }}
        className="shadow-orange ease-in-out duration-200 hover:opacity-[.7] lg:w-[300px] bg-orange rounded-xl p-4 text-white flex justify-center items-center gap-3"
      >
        <img src={cart} width={20} height={20} className="filter-white" />{" "}
        <span className="text-xl font-semibold">Add to cart</span>
      </button>
    </div>
  );
};

export const Cart = () => {
  const userCart = useCartStore((state) => state.cart);
  const removeCart = useCartStore((state) => state.removeCart);

  const toggleLightboxActive = useLightboxStore(
    (state) => state.toggleLightboxActive
  );

  const showCart = useCartStore((state) => state.showCart);
  const toggleShowCart = useCartStore((state) => state.toggleShowCart);

  if (showCart) {
    return (
      <div
        id="cart"
        className="shadow-dark cursor-default lg:mx-0 fixed top-24 lg:w-[370px] w-[90%] -translate-x-1/2 lg:left-auto left-1/2 rounded-xl z-[999] bg-gray-100"
      >
        <header className="flex justify-between items-center px-4 py-5 border-b border-b-grayish-blue">
          <h5 className="text-start text-xl font-semibold">Cart</h5>
          <button onClick={toggleShowCart}>
            <img className="shrink-0" src={close} alt="Close Cart" width={16} height={16} />
          </button>
        </header>
        <div
          className={`h-[200px] overflow-y-auto py-5 flex justify-center px-4 ${
            userCart === 0 ? "items-center" : ""
          }`}
        >
          {userCart === 0 ? (
            <p className="font-semibold">Your cart is empty</p>
          ) : (
            <>
              <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <img
                      onClick={toggleLightboxActive}
                      src={productImageThumbnails[0].src}
                      alt="Fall Limited Edition Sneakers"
                      width={64}
                      height={64}
                      className="rounded-xl hover:opacity-[.7] ease-in-out duration-200 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <h6 className="font-semibold text-very-dark-blue text-2xl">
                        Fall Limited Ed...
                      </h6>
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-1">
                          <span className="text-dark-grayish-blue">
                            $125.00
                          </span>
                          <span className="text-dark-grayish-blue">x</span>
                          <span className="text-dark-grayish-blue">
                            {userCart}
                          </span>
                        </div>
                        <span className="text-lg font-semibold text-very-dark-blue">
                          ${userCart * 125}.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <button onClick={removeCart}>
                    <img
                      width={32}
                      height={32}
                      src={trash}
                      alt="Remove product"
                    />
                  </button>
                </div>
                <button className="ease-in-out duration-200 hover:opacity-[.7] bg-orange rounded-xl p-4 text-white flex justify-center items-center gap-3">
                  <img
                    src={checkout}
                    width={24}
                    height={24}
                    className="filter-white"
                  />{" "}
                  <span className="text-xl font-semibold">Go to checkout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export const CartButton = () => {
  const userCart = useCartStore((state) => state.cart);
  const toggleShowCart = useCartStore((state) => state.toggleShowCart);

  return (
    <div className="relative flex items-center">
      <button className="relative" onClick={toggleShowCart}>
        <img src={cart} width={24} height={24} alt="Cart" />
        {userCart !== 0 ? (
          <span className="absolute -top-[10px] text-white bg-orange text-[12px] px-3 py-[2px] rounded-full">
            {userCart}
          </span>
        ) : (
          <></>
        )}
      </button>
      <Cart />
    </div>
  );
};
