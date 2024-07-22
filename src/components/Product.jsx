const Product = ({ item, addToCart }) => {
      const { title, price, image } = item;

      return (
            <div className=" font-roboto  border-[1px] p-5 rounded-lg">
                  <figure>
                        <img
                              src={`/img/${image}.webp`}
                              alt="imagen de producto"
                        />
                  </figure>
                  <div className="flex gap-2 py-2">
                        <img src="/img/star.svg" className="w-5" alt="rating" />
                        <img src="/img/star.svg" className="w-5" alt="rating" />
                        <img src="/img/star.svg" className="w-5" alt="rating" />
                        <img src="/img/star.svg" className="w-5" alt="rating" />
                        <img src="/img/star.svg" className="w-5" alt="rating" />
                  </div>
                  <div>
                        <p className="py-2 font-bold text-lg">{title}</p>
                        <p className="text-2xl font-bold text-[#EB3A86]">
                              ${price}
                        </p>
                  </div>
                  <div>
                        <button
                              className="bg-[#090C2B] text-white py-2 px-3 text-base block w-full mt-4"
                              onClick={() => addToCart(item)}
                        >
                              ADD TO CART
                        </button>
                  </div>
            </div>
      );
};

export default Product;
