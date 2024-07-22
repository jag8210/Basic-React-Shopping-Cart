import {useState} from 'react'
import SideBarCart from './SideBarCart';

const Header = ({isActiveCart, setIsActiveCart, setCart, cart, removeFromCart, increaseQuantity, decreaseQuantity}) => {

    
  return (
        <>
              <div className="bg-[#090c2b]  w-full font-roboto">
                    <div className=" md:container px-5 mx-auto flex items-center h-24 justify-between">
                          <div>
                                <img
                                      src="/img/logo_white.png"
                                      alt="ecommerce logo"
                                />
                          </div>

                          <button
                                className="cursor-pointer"
                                onClick={() => setIsActiveCart(true)}
                                
                          >
                                <img
                                      className="h-9 w-18 relative"
                                      src="/img/bolso.svg"
                                      alt="cart Icon"
                                />
                                
                          </button>
                    </div>
              </div>

              <SideBarCart
                    isActiveCart={isActiveCart}
                    setIsActiveCart={setIsActiveCart}
                    setCart = {setCart}
                    cart = {cart}
                    removeFromCart = {removeFromCart}
                    increaseQuantity = {increaseQuantity}
                    decreaseQuantity = {decreaseQuantity}
              />
        </>
  );
}

export default Header