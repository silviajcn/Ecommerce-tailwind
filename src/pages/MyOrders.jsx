import { useContext } from 'react';
import { Layout, OrdersCard } from '../components';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { GoToTop } from '../utils';

export const MyOrders = () => {

    const context = useContext(Context);
    GoToTop();

    return (
        <Layout>
            <h1 className='mb-5 font-bold text-2xl'>My orders</h1>
            {
                context.order.map((order, index) => (
                    <Link to={`/my-orders/${index}`} key={index}>
                        <OrdersCard
                            key={order.id}
                            id={order.id}
                            date={order.date}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
};