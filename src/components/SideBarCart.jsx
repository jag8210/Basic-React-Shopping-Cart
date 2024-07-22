import { useMemo } from "react"
import MiniCardProduct from "./MiniCartProduct"
const SideBarCart = ({isActiveCart, setIsActiveCart, setCart, cart, removeFromCart, increaseQuantity, decreaseQuantity}) => {

    const showSideBarCart = 'right-0'
    const hideSideBarCart = 'right-[-400px]'
    const showContainer = "bg-black/80 w-screen h-screen fixed top-0";
    const hideContainer = "invisible";
    const cartTotal = useMemo(()=> cart.reduce((total, item) => total + (item.quantity * item.price), 0 ),[cart])

  return (
        <div
              className={`${ isActiveCart ? showContainer : hideContainer }  transition-all duration-500`}
              onClick = {() => setIsActiveCart(false)}
        >
              <aside
                    className={` bg-white p-5 font-roboto flex flex-col fixed h-screen w-[400px] top-0 ${
                          isActiveCart ? showSideBarCart : hideSideBarCart
                          } transition-all`}
                    onClick = {(e) => e.stopPropagation()}

              >
                    <div className="flex justify-between items-center border-b-[1px] pb-5">
                          <p className="font-bold text-lg ">Shopping Cart</p>
                          <p
                                className="cursor-pointer"
                                onClick={() => setIsActiveCart(false)}
                          >
                                {" "}
                                X Close
                          </p>
                    </div>

                    <div className="grow-[2] my-5 overflow-y-scroll">
                          {cart.length === 0 ? (
                                <div className="text-center">
                                      <img className="w-48 inline" src="/img/carro-vacio.svg" alt="empty cart" />
                                      <p className="text-black text-center text-xl font-semibold ">
                                            No Products in the Cart
                                      </p>
                                </div>
                          ) : (
                                cart.map((product) => (
                                      <MiniCardProduct
                                            key={product.id}
                                            product={product}
                                            removeFromCart={removeFromCart}
                                            increaseQuantity={increaseQuantity}
                                            decreaseQuantity={decreaseQuantity}
                                      />
                                ))
                          )}
                    </div>

                    <div className="py-5 flex flex-col justify-between">
                          <div>
                                <div className="flex justify-between border-t pt-4">
                                      <p className="font-bold">SUBTOTAL:</p>
                                      <p className="text-[#EB3A86] font-bold text-xl">
                                            ${cartTotal}
                                      </p>
                                </div>

                                <button
                                      className=" bg-[#EB3A86] py-2 text-white w-full mt-5"
                                      onClick={() => setCart([])}
                                >
                                      EMPTY CART
                                </button>
                          </div>
                    </div>
              </aside>
        </div>
  );
}

export default SideBarCart