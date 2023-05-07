import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Context } from '../context';
import { OrderCard } from './OrderCard';
import './styles.css';

export const CheckoutSideMenu = () => {

    const context = useContext(Context);
    //console.log(context.cartProducts);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(prod => prod.id != id);
        context.setCartProducts(filteredProducts);
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='overflow-y-scroll'>
                {
                    context.cartProducts.map((prod) => (
                        <OrderCard
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            imageUrl={prod.images[0]}
                            price={prod.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </aside>
    )
};