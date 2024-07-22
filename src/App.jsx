import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { db } from "./data/db.js";

function App() {
      const [isActiveCart, setIsActiveCart] = useState(false);
      const [data, setData] = useState(db);
      const [cart, setCart] = useState([]);
      const MAX_ITEMS = 5;
      const MIN_ITEMS = 1;

      const increaseQuantity = (id) => {
            const updatedCart = cart.map((item) => {
                  if (item.id === id && item.quantity < MAX_ITEMS) {
                        return {
                              ...item,
                              quantity: item.quantity + 1,
                        };
                  }
                  return item;
            });
            setCart(updatedCart);
      };

      const decreaseQuantity = (id) => {
            const updatedCart = cart.map((item) => {
                  if (item.id === id && item.quantity > MIN_ITEMS) {
                        return {
                              ...item,
                              quantity: item.quantity - 1,
                        };
                  }
                  return item;
            });
            setCart(updatedCart);
      };

      const addToCart = (item) => {
            const itemExists = cart.findIndex(
                  (product) => product.id === item.id
            );
            if (itemExists >= 0 ) {
                  const updatedCart = [...cart];
                  updatedCart[itemExists].quantity++;
                  setCart(updatedCart);
            } else {
                  item.quantity = 1;
                  setCart([...cart, item]);
            }
            setIsActiveCart(true)
      };

      const removeFromCart = (id) => {
            setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      };

      return (
            <>
                  <Header
                        isActiveCart={isActiveCart}
                        setIsActiveCart={setIsActiveCart}
                        setCart={setCart}
                        cart={cart}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                  />

                  <div className="md:grid  2xl:grid-cols-5 lg:grid-cols-4 md: grid-cols-2 gap-5 container mx-auto my-10">
                        {data.map((item) => (
                              <Product
                                    key={item.id}
                                    item={item}
                                    setCart={setCart}
                                    addToCart={addToCart}
                              />
                        ))}
                  </div>
            </>
      );
}

export default App;
