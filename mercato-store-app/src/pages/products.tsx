import ProductList from "../components/ProductList";
import SearchBar from "../components/searchbar";
import Categories from "../components/categories";
import type { ProductInfo } from "../api/fakeStoreApi";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import type { ProductContextProps } from "../context/ProductContext";

const Products = () => {
  const { filteredProducts } = useContext(
    ProductContext,
  ) as ProductContextProps;

  return (
    <>
      <section className="border-b border-[#e6e3de]">
        <div className="ml-50 mt-30 space-y-5">
          <div>
            <h2>All Products</h2>
            <p>Browse our complete collection of 20 products</p>
          </div>
          <div className="grid grid-cols-2 ">
            <SearchBar />
            <Categories />
          </div>
        </div>
      </section>

      <section className="mb-8 ">
        <div className="ml-50 mt-30 space-y-5 grid grid-cols-2 md:grid grid-cols-3 mx-auto  max-w-6xl gap-x-20">
          {filteredProducts.map((prod) => (
            <ProductList
              key={prod.id}
              id={prod.id}
              name={prod.title}
              quantity={prod.rating.count}
              stars={prod.rating.rate}
              description={prod.description || "No description "}
              image={prod.image}
              rating={prod.rating}
              price={prod.price}
              category={prod.category}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 mb-8">
        <div>
          <div className="flex justify-center gap-10">
            <button className="border border-[#e6e3de] p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white">
              Prev
            </button>
            <button className="border border-[#e6e3de] p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
