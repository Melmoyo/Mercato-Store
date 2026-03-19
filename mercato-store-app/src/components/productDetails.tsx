import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faCartShopping, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.prod;
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  const { addItem } = context;

  return (
    <>
      <section className="mb-8 mt-30 ml-50 ">
        <Link to="/products" className="mt-10">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" className="mr-2" />
          Back to Products
        </Link>
        <div className="grid grid-cols-2 mt-10 gap-y-6 gap-20">
          <div className="border border-[#e6e3de] bg-gray-300 p-4 rounded-2xl flex justify-center">
            <img src={product.image} alt={product.name} />
          </div>

          <div className=" space-y-5 ">
            <div className=" bg-gray-400 rounded-lg px-2  w-36 text-center ">
              {product.category}
            </div>
            <h2 className="text-2xl max-w-sm font-semibold">{product.name}</h2>

            <span>{<StarRating rating={product.stars} />}</span>
            <div className="font-semibold text-2xl mb-4">
              ${product.price.toFixed(2)}
            </div>
            <hr className="text-[#e6e3de] w-145"></hr>
            <h3 className="text-xl max-w-sm font-semibold mt-4">
              Description{" "}
            </h3>
            <p className="text-lg max-w-md ">{product.description}</p>
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                })
              }
              className="bg-[#d06a4b] text-white p-2 rounded-lg  w-3/4 my-4"
            >
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              Add to Cart
            </button>
            <hr className="text-[#e6e3de] w-145"></hr>
            <div className="grid grid-cols-3 max-w-xl gap-10">
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                Free Shipping<p>On orders over $50</p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                Secure Payment<p>100% protected</p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                Easy Returns <p>30 day policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
