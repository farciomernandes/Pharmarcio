import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useCount() {
    const { count, setCount } = useContext(CartContext);

    return [count, setCount];
}

export default function CartProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <CartContext.Provider value={{ count, setCount }}>
            {children}
        </CartContext.Provider>
    )
}