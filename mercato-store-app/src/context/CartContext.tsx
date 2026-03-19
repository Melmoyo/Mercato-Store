import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface CartContextProps {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);
type CartProviderProps = {
  children: ReactNode;
};
export function CartProvider({ children }: CartProviderProps) {
  //all functions
  const [cart, setCart] = useState<CartItem[]>([]);
  const addItem = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id != id));
  };
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        removeItem,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        cart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
