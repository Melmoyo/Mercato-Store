import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import type { ProductContextProps } from "../context/ProductContext";
const Categories = () => {
  const { activeFilter, setActiveFilter } = useContext(
    ProductContext!,
  ) as ProductContextProps;
  return (
    <>
      <div className="flex flex-wrap space-x-4 max-w-sm">
        <button
          onClick={() => setActiveFilter("all")}
          className={
            activeFilter === "all"
              ? "bg-[#d06a4b] text-white p-1 rounded-lg h-8"
              : "hover:bg-[#d06a4b] hover:text-white p-1 rounded-lg h-8"
          }
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("electronics")}
          className={
            activeFilter === "electronics"
              ? "bg-[#d06a4b] text-white p-1 rounded-lg h-8"
              : "hover:bg-[#d06a4b] hover:text-white p-1 rounded-lg h-8"
          }
        >
          Electronics
        </button>
        <button
          onClick={() => setActiveFilter("jewelery")}
          className={
            activeFilter === "jewelery"
              ? "bg-[#d06a4b] text-white p-1 rounded-lg h-8"
              : "hover:bg-[#d06a4b] hover:text-white p-1 rounded-lg h-8"
          }
        >
          Jewelery
        </button>
        <button
          onClick={() => setActiveFilter("men's clothing")}
          className={
            activeFilter === "men's clothing"
              ? "bg-[#d06a4b] text-white p-1 rounded-lg h-8"
              : "hover:bg-[#d06a4b] hover:text-white p-1 rounded-lg h-8"
          }
        >
          Men's Clothing
        </button>
        <button
          onClick={() => setActiveFilter("women's clothing")}
          className={
            activeFilter === "women's clothing"
              ? "bg-[#d06a4b] text-white p-1 rounded-lg h-8"
              : "hover:bg-[#d06a4b] hover:text-white p-1 rounded-lg h-8"
          }
        >
          Women's Clothing
        </button>
      </div>
    </>
  );
};
export default Categories;
