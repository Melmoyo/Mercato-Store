import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { ProductInfo } from "../api/fakeStoreApi";
export interface ProductContextProps {
  products: ProductInfo[];
  filteredProducts: ProductInfo[];
  activeFilter: string;
  searchQuery: string;
  setActiveFilter: (activeFilter: string) => void;
  setSearchQuery: (input: string) => void;
}
export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined,
);

type ProductProviderProps = {
  children: ReactNode;
};
export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = products
    .filter((product) =>
      activeFilter === "all" ? true : product.category === activeFilter,
    )
    .filter(
      (product) =>
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: ProductInfo[] = await response.json();
      setProducts(data);
    };
    fetchFilteredProducts();
  }, []);
  console.log(products);
  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        activeFilter,
        searchQuery,
        setActiveFilter,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
