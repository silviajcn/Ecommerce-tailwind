import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';
import { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';

export const ProductDetail = () => {

    const context = useContext(Context);
    //console.log(context.showProductDetail);

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}  product-detail flex-col fixed right-0 border border-black rounded-lg fondo`}
        >
            <div className='flex justify-between items-start px-5 mt-5'>
                <div>
                    <h2 className='font-medium text-xl '>{context.showProductDetail.title}</h2>
                    <span className='text-xs'>{context.showProductDetail.category}</span>
                </div>
                <div>
                    <XMarkIcon
                        onClick={() => context.closeProductDetail()}
                        className='h-6 w-6 text-black cursor-pointer'
                    ></XMarkIcon>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-0 mb-5 px-5'>
                <div className='flex flex-row'>
                    <p className={context.showProductDetail.rate >= 1 ? 'good' : 'bad'}><StarIcon /></p>
                    <p className={context.showProductDetail.rate >= 2 ? 'good' : 'bad'}><StarIcon /></p>
                    <p className={context.showProductDetail.rate >= 3 ? 'good' : 'bad'}><StarIcon /></p>
                    <p className={context.showProductDetail.rate >= 4 ? 'good' : 'bad'}><StarIcon /></p>
                    <p className={context.showProductDetail.rate >= 5 ? 'good' : 'bad'}><StarIcon /></p>
                </div>
                <p className='flex justify-end px-6'>Price: 
                    <span className='font-medium text-2xl text-red-800 ml-2'>${context.showProductDetail.price}</span>
                </p>
            </div>
            <figure className='flex justify-center items-center px-6 relative'>
                <img className='h-40 max-w-xs rounded-lg'
                    src={context.showProductDetail?.images?.[0]}
                    alt={`image ${context.showProductDetail?.title}`}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-light text-sm'>
                    {context.showProductDetail.description?.length > 400 ? (context.showProductDetail.description.substring(0, 400)) + '...' : context.showProductDetail.description}
                </span>
            </p>

            <Link to={`/product/${context.showProductDetail.id}`} className='flex justify-center cursor-pointer mb-6'>
                <button
                    className='border-2 p-2 rounded-lg fondo2'
                    onClick={() => context.closeProductDetail()}
                >
                    See more details
                </button>
            </Link>
        </aside>
    )
};