import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import type { ProductContextProps } from "../context/ProductContext";
const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(
    ProductContext!,
  ) as ProductContextProps;
  return (
    <>
      <section className="  ">
        <div className="  mt-8 mb-8 space-y-5 mr-20 ">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="        Search for products..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className=" w-full  border border-[#e6e3de] rounded-lg p-2 outline-[#d06a4b]"
            />
            {searchQuery === "" && (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="sm"
                className="absolute top-5 left-5 -translate-y-1/4"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default SearchBar;
