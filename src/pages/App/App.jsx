import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import { HomePage, NotFound, MyOrders, DetailProduct, CartShoppingPage, OrderPage, LastOrderPage } from '../';
import { NavBar, Footer, CheckoutSideMenu } from '../../components';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/laptops', element: <HomePage /> },
        { path: '/tablets', element: <HomePage /> },
        { path: '/cameras', element: <HomePage /> },
        { path: '/headphones', element: <HomePage /> },
        { path: '/cellphones', element: <HomePage /> },
        { path: '/accessories', element: <HomePage /> },
        // { path: '/account', element: <Account /> },
        { path: '/cart-shopping', element: <CartShoppingPage /> },
        { path: '/my-orders/last', element: <LastOrderPage /> },
        { path: '/my-orders/:id', element: <OrderPage /> },
        { path: '/my-orders', element: <MyOrders /> },
        // { path: '/sign-in', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
        { path: '/product/:id', element: <DetailProduct /> }
    ]);

    return routes;
}

export const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <NavBar />
                <Footer />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
};