import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home, Account, MyOrder, NotFound, Orders, Signin } from '../';
import { NavBar } from '../../components';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/account', element: <Account /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/orders', element: <Orders /> },
        { path: '/sign-in', element: <Signin /> },
        { path: '/*', element: <NotFound /> }
    ]);

    return routes;
}

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />

            <AppRoutes />
            
        </BrowserRouter>
    )
};