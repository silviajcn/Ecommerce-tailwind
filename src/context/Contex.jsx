import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Open/ Close detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Open/ Close checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product detail
    const [showProductDetail, setShowProductDetail] = useState({});

    // Carrito compras traer
    const item = localStorage.getItem('comprarShopi');
    const result = item ? JSON.parse(item) : [];

    // Carrito compras enviar
    const [cartProducts, setCartProducts] = useState(result);
    useEffect(() => {
        localStorage.setItem('comprarShopi', JSON.stringify(cartProducts));
    }, [cartProducts]);

    // Shopping cart: My order
    const itemsOrder = localStorage.getItem('checkout');
    const resultOrders = itemsOrder ? JSON.parse(itemsOrder) : [];

    const [order, setOrder] = useState(resultOrders);
    useEffect(() => {
        localStorage.setItem('checkout', JSON.stringify(order));
    }, [order]);

    return (
        <Context.Provider value={{
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            showProductDetail,
            setShowProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            productsCount: cartProducts.length,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
        }}>
            {children}
        </Context.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.object
}