import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import type { ProductRating } from "../api/fakeStoreApi";
import StarRating from "../components/StarRating";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface ProductListProps {
  id: number;
  price: number;
  name: string;
  stars: number;
  quantity: number;
  image: string;
  category: string;
  description?: string;
  rating: ProductRating;
}

const ProductList = ({
  id,
  price,
  name,
  quantity,
  description,
  rating,
  stars,
  image,
  category,
}: ProductListProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product_details", {
      state: {
        prod: {
          id,
          price,
          name,
          quantity,
          description,
          rating,
          stars,
          image,
          category,
        },
      },
    });
  };
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  const { addItem } = context;
  return (
    <>
      <div
        onClick={handleClick}
        className=" relative border border-[#e6e3de] max-w-md rounded-lg h-auto  rounded bg-white group overflow-hidden transition-duration-300 hover:shadow-lg hover:-translate-y-1  "
      >
        <div className=" pt-5  ">
          {" "}
          <img
            src={image}
            alt={name}
            className="object-contain  w-full h-96 bg-[#e6e3de] transition duration-300 group-hover:scale-103 overflow-hidden"
          />
        </div>

        <div className="absolute top-8 bg-gray-400 rounded-lg px-1 ml-5">
          <h3>{category}</h3>
        </div>
        <div className="px-5 w-full h-56 mt-8">
          {" "}
          <div>
            <p className="text-md text-black max-w-sm h-20  ">{name}</p>
            <div className="flex gap-6">
              <StarRating rating={stars} />
              <span className="text-[#e6e3de]">({quantity})</span>
            </div>
            <div className="font-semibold text-2xl mt-4">${price}</div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem({
                id: id,
                image: image,
                name: name,
                price: price,
                quantity: 1,
              });
            }}
            className="bg-[#d06a4b] text-white p-2 rounded-lg  w-3/4 my-4 z-50"
          >
            <span>
              <FontAwesomeIcon icon={faCartShopping} size="sm" />
            </span>{" "}
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
