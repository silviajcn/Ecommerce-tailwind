import { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { Layout, OrderCard } from '../components';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { GoToTop } from '../utils';

export const OrderPage = () => {
    const context = useContext(Context);
    GoToTop();

    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    return (
            <Layout>
                <div className='flex justify-center items-center font-light w-1/2 relative'>
                    <h1 className='mb-5 font-bold text-2xl'>Order</h1>
                    <Link to='/my-orders' className='absolute right-0'>
                        <ChevronRightIcon className='h-4 w-4 text-black'></ChevronRightIcon>
                    </Link>
                </div>
                <div className='w-1/2 mt-10'>
                {
                    context.order?.[index]?.products.map((prod) => (
                            <OrderCard
                                key={prod.id}
                                id={prod.id}
                                title={prod.title}
                                imageUrl={prod.images?.[0]}
                                price={prod.price}
                            />
                        ))
                    }
                </div>
            </Layout>
    )

};