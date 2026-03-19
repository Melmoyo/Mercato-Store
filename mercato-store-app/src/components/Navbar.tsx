import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faCartShopping,
  faStore,
  faBagShopping,
  faPlus,
  faXmark,
  faMinus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [navbarOpaque, setNavbarOpaque] = useState(false);
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  const {
    cart,
    removeItem,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = context;
  console.log("Cart" + cart);
  console.log(JSON.stringify(cart, null, 2));
  const location = useLocation();
  const product = location.state?.prod;
  console.log(product);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setNavbarOpaque(true);
      else setNavbarOpaque(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpenCanvas, setisOpenCanvas] = useState(false);
  return (
    <>
      <header
        className={`flex justify-around items-center w-full py-6 z-50 border border-b border-[#e6e3de] fixed top-0 ${navbarOpaque ? "bg-white/20 backdrop-blur-sm" : "bg-[#faf9f7]"}`}
      >
        <div className="flex items-center space-x-2">
          <span className="cursor-pointer">
            <FontAwesomeIcon
              icon={faStore}
              size="lg"
              className="text-[#d06a4b]"
            />
          </span>
          <h2 className="text-2xl font-semibold cursor-pointer">Mercato</h2>
        </div>
        <div>
          <nav>
            <ul className="flex gap-10">
              <li className="text-[#7a6e62] font-semibold">
                <Link to="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li className="text-[#7a6e62] font-semibold">
                <Link to="/products" className="hover:text-black">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={() => setisOpenCanvas(!isOpenCanvas)} className="group">
          <span className="border border-[#e6e3de] rounded-lg p-1 group-hover:bg-[#d06a4b] group-hover:text-white">
            <FontAwesomeIcon icon={faCartShopping} size="sm" />
          </span>
          <sup className="relative -top-8 -right-4 group-hover:bg-[#d06a4b] group-hover:text-white bg-[#d06a4b] w-4 h-4 rounded-full flex items-center justify-center">
            {cart.length}
          </sup>
        </div>
      </header>

      {isOpenCanvas && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setisOpenCanvas(!isOpenCanvas)}
          ></div>
          <div className="offcanvas fixed top-20 right-0 z-50 h-full w-100">
            <div className="border rounded-lg bg-[#faf9f7] border-[#e6e3de] flex flex-col h-full  overflow-y-auto">
              <div className="flex justify-between m-4">
                <div className="text-xl font-semibold">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="text-gray-600"
                    size="lg"
                  />
                  Shopping Cart
                  {cart.length > 0 && <span> ({cart.length} items)</span>}
                </div>
                <div onClick={() => setisOpenCanvas(!isOpenCanvas)}>
                  <FontAwesomeIcon icon={faXmark} className="text-gray-400" />
                </div>
              </div>

              {cart.length === 0 ? (
                <div className="flex flex-col text-center items-center justify-center h-4/5 gap-4">
                  <div>
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      size="lg"
                      className="text-gray-600 bg-gray-300 rounded-full w-50 h-50 p-4"
                    />
                  </div>
                  <div>
                    <h3>Your cart is empty</h3>
                    <p className="text-gray-400">
                      Add items to your cart to see them here
                    </p>
                    <button
                      onClick={() => setisOpenCanvas(!isOpenCanvas)}
                      className="mt-4 border p-2 rounded-lg border-black hover:bg-[#d06a4b] hover:text-white hover:border-none"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="w-full border-b border-[#e6e3de] my-4 h-auto p-4 mx-auto grid grid-cols-2"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20"
                        />
                      </div>

                      <div className="flex flex-col">
                        {" "}
                        <div className="flex justify-around">
                          <h2>{item.name}</h2>
                          <span onClick={() => removeItem(item.id)}>
                            <FontAwesomeIcon icon={faXmark} />
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="space-x-2 flex justify-start">
                            <button onClick={() => decreaseQuantity(item.id)}>
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="rounded-md border p-1"
                              />
                            </button>
                            <div> {item.quantity}</div>
                            <button onClick={() => increaseQuantity(item.id)}>
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="rounded-md border p-1"
                              />
                            </button>
                          </div>
                          <div>${item.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              {cart.length > 0 && (
                <div className="">
                  <div className="border-t border-[#e6e3de] flex justify-between mx-4">
                    <div>SubTotal</div>
                    <div>${subtotal.toFixed(2)}</div>
                  </div>
                  <div className=" flex justify-between mx-4">
                    <div>Shipping</div>
                    <div>Free</div>
                  </div>
                  <div className="border-t border-[#e6e3de] flex justify-between mx-4">
                    <div>Total</div>
                    <div>${subtotal.toFixed(2)}</div>
                  </div>
                  <div>
                    <button className="bg-[#d06a4b] text-white p-2 rounded-lg  mx-auto  my-4 block text-center">
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="mx-auto block border border-[#e6e3de] w-20 p-2 rounded-lg hover:bg-[#d06a4b] hover:text-white border-none"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Navbar;
