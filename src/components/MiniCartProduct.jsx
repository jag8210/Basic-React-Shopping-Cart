

const MiniCardProduct = ({product, removeFromCart, increaseQuantity, decreaseQuantity}) => {
       
      return (
            <div className="flex justify-around gap-1 items-center py-5 border-b-2 px-2">
                  <div className="w-20">
                        <img src={`/img/${product.image}.webp`} alt="Product Image" />
                  </div>
                  <div>
                        <p className="text-gray-950 font-medium text-base">
                              {product.title}
                        </p>
                        <p className="text-gray-400 mt-2">
                              {product.quantity} x
                              <span className="text-[#EB3A86] font-medium">
                                    {" "}
                                    ${product.price}
                              </span>
                        </p>
                        <div className="flex align-middle mt-2">
                              <button 
                                className="border-2 py-0.5 px-2"
                                onClick = {()=>decreaseQuantity(product.id)}
                              > - </button>
                              <p className="border-y-2 py-0.5 px-2"> {product.quantity} </p>
                              <button 
                                className="border-2 py-0.5 px-2"
                                onClick = {()=> increaseQuantity(product.id)}
                              > + </button>
                        </div>
                  </div>
                  <button 
                    className=" bg-red-600 rounded-full py-1 px-2 text-white text-xs "
                    onClick = {() => removeFromCart(product.id)}
                  >X</button>
            </div>
      );
};

export default MiniCardProduct;
