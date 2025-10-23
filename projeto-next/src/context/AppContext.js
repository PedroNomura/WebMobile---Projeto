"use client"; // Context precisa ser um Client Component

import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExistente = prevItems.find(item => item.id === product.id);
            if (itemExistente) {
                // Se existe, aumenta a quantidade
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantidade: 1 }];
        });
        if (!isCartOpen) {
            setIsCartOpen(true);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }, [cartItems]);


    const value = {
        isMenuOpen,
        toggleMenu,
        isCartOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}