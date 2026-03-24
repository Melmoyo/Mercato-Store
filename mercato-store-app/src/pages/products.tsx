import ProductList from "../components/ProductList";
import SearchBar from "../components/searchbar";
import Categories from "../components/categories";

import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import type { ProductContextProps } from "../context/ProductContext";

const Products = () => {
  const { filteredProducts, searchQuery } = useContext(
    ProductContext,
  ) as ProductContextProps;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // slice the array based on current page
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
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
          {currentItems.map((prod) => (
            <ProductList
              key={prod.id}
              id={prod.id}
              name={prod.title}
              quantity={prod.rating.count}
              stars={prod.rating.rate}
              description={prod.description || "No description "}
              image={prod.image}
              rating={prod.rating}
              price={prod.price.toFixed(2)}
              category={prod.category}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 mb-8">
        <div>
          <div className="flex justify-center gap-10">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="border border-[#e6e3de] p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === i + 1
                    ? "bg-teal-400 text-black"
                    : "border-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="border border-[#e6e3de] p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
