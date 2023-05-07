import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import { HomePage, Account, MyOrder, NotFound, Orders, Signin, DetailProduct } from '../';
import { NavBar, Footer, CheckoutSideMenu } from '../../components';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/account', element: <Account /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/orders', element: <Orders /> },
        { path: '/sign-in', element: <Signin /> },
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