import Navbar from "./components/Navbar";
import ProductDetails from "./components/productDetails";
import Home from "./pages/home";
import Products from "./pages/products";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route path="/product_details" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
