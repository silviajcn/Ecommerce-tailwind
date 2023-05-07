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
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}  product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-xl '>{context.showProductDetail.title}</h2>
                <div>
                    <XMarkIcon
                        onClick={() => context.closeProductDetail()}
                        className='h-6 w-6 text-black cursor-pointer'
                    ></XMarkIcon>
                </div>
            </div>
            <div className='flex flex-row mt-0 mb-5 px-5'>
                <p className={context.showProductDetail.rate >= 1 ? 'good' : 'bad'}><StarIcon /></p>
                <p className={context.showProductDetail.rate >= 2 ? 'good' : 'bad'}><StarIcon /></p>
                <p className={context.showProductDetail.rate >= 3 ? 'good' : 'bad'}><StarIcon /></p>
                <p className={context.showProductDetail.rate >= 4 ? 'good' : 'bad'}><StarIcon /></p>
                <p className={context.showProductDetail.rate >= 5 ? 'good' : 'bad'}><StarIcon /></p>
            </div>
            {/* <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                    src={context.showProductDetail?.images[0]}
                    alt={`image ${context.showProductDetail?.title}`}
                />
            </figure> */}
            <p className='flex justify-between px-6'>
                <span className='font-medium text-xs mb-1'>{context.showProductDetail.category}</span>
                <span className='font-medium text-2xl text-red-800'>${context.showProductDetail.price}</span>
            </p>
            <p className='flex flex-col p-6'>
                <span className='font-light text-sm'>
                    {context.showProductDetail.description?.length > 850 ? (context.showProductDetail.description.substring(0, 850)) + '...' : context.showProductDetail.description}
                </span>
            </p>

            <Link to={`/product/${context.showProductDetail.id}`} className='flex justify-center cursor-pointer'>
                <button
                    className='border-2 p-2 rounded-lg'
                    onClick={() => context.closeProductDetail()}
                >
                    Ver más detalles
                </button>
            </Link>
        </aside>
    )
};