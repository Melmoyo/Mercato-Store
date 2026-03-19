import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Categories from "../components/categories";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { ProductInfo } from "../api/fakeStoreApi";
const Home = () => {
  const [products, _setProducts] = useState<ProductInfo[]>([]);

  const location = useLocation();
  const prod = location.state?.dev;
  return (
    <>
      <section className="hero border border-b border-[#e6e3de] ">
        <div className="ml-50 mt-30 space-y-5">
          <div className="p-1 bg-[#e6e3de] w-50 rounded-xl ">
            <FontAwesomeIcon icon={faStar} className="text-[#d06a4b]" />
            <span>Explore Our Collection</span>
          </div>
          <div>
            <h1 className="text-5xl max-w-xl font-bold mb-5">
              Discover Quality Products at Great Prices
            </h1>
            <p className="text-lg max-w-md font-semibold">
              Browse our curated selection of products from top categories.Find
              everything from electronicsto fashion, all in one place.
            </p>
          </div>
          <div className="cta-btns space-x-5 flex mb-4">
            <button className="bg-[#d06a4b] text-white p-2 rounded-lg  ">
              <Link to="/products" className="px-2">
                Browse All Products
              </Link>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
            <button className="border border-[#e6e3de] p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white">
              View Featured
            </button>
          </div>
        </div>
      </section>

      <section className=" border-b border-[#e6e3de]  ">
        <div className="grid grid-cols-2  ml-50 mt-8 mb-8 space-y-5 ">
          <div className="flex flex-col  ">
            <h2 className="text-3xl font-semibold">Shop by Category</h2>
            <p className="text-md">Find products in your favourite category</p>
          </div>
          <Categories />
        </div>
      </section>
      <section className="bg-gray-100/20 border border-b border-[#e6e3de]">
        <div className=" ml-50 mt-8 mb-8 space-y-5 ">
          <div className="relative ">
            <input
              type="text"
              placeholder="        Search for products..."
              className=" w-1/2  border border-[#e6e3de] rounded-lg p-2 outline-[#d06a4b]"
            />

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="sm"
              className="absolute top-5 left-5 -translate-y-1/4"
            />
          </div>
        </div>
      </section>
      <section id="featured">
        <div className="ml-50 mt-8 mb-8 space-y-5 grid grid-cols-2">
          <div className="">
            <h2 className="text-3xl font-semibold">Featured Products</h2>
            <p>Handpicked products just for you</p>
          </div>
          <div>
            <button className="border border-[#e6e3de] rounded-lg p-2 hover:bg-[#d06a4b] hover:hover:text-white">
              View All{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          {products.map((product) => (
            <ProductList
              id={6}
              name={product.title}
              quantity={product.rating.count}
              description={product.description || " "}
              stars={product.rating.rate}
              image={product.image}
              rating={prod.rate}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
