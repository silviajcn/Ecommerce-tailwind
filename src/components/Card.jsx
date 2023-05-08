import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {

    const context = useContext(Context);

    //console.log(item);
    const { id, title, price, category, images } = item;

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setShowProductDetail(productDetail);

        localStorage.setItem('productDetail', JSON.stringify(productDetail));
    }

    const addProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(prod => prod.id === id).length > 0

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-green-100 w-6 h-6 rounded-full m-2 p-1 border'>
                    <CheckIcon className='h-6 w-6 text-black'></CheckIcon>
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border-2'
                    onClick={() => addProductsToCart(item)}
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg relative border'>
            <figure
                className='relative mb-2 w-full h-4/5'
                onClick={() => showProduct(item)}
            >
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center'>
                    {/* {category.name} */}
                    {category}
                </span>
                <img src={images[0]} alt={`image ${title}`} className='w-full h-full object-contain rounded-lg' />
            </figure>
            {
                renderIcon(id)
            }
            <p className='flex justify-between px-1'>
                <Link to={`/product/${id}`}>
                    <span className='text-sm font-light'>
                        {title.length > 25 ? (title.substring(0, 24)) + '...' : title}
                    </span>
                </Link>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
};

Card.propTypes = {
    item: PropTypes.object
}