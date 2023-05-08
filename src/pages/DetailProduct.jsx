import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context';
import { deliveryDate, today } from '../utils';
import { Layout } from '../components';
import { ChevronLeftIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

export const DetailProduct = () => {

    const context = useContext(Context);

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    }

    const item = localStorage.getItem('productDetail');
    const product = item ? JSON.parse(item) : {};

    const { title, description, price, category, images,
            banner, rate, brand,
    } = product;

    //Image Exchange
    const [imagen, setImagen] = useState();
    const cambiarImagen =(element) => {
        setImagen(element)
    }
    useEffect(() => {
    }, [setImagen]);

    // Agregar al carrito
    const addProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        console.log(context.cartProducts)
    }
    
    return (
        <>
            <Layout>
                <div className='w-full max-w-screen-lg'>
                    <button className='flex flex-grow items-center font-light' onClick={onNavigateBack}>
                        <ChevronLeftIcon className='h-4 w-4 text-black'></ChevronLeftIcon> Volver
                    </button>

                    <div className='flex flex-column w-full mb-10 mt-10'>
                        <figure className='w-4/12'>
                            {
                                imagen !== undefined?
                                <img className='w-full h-60 object-contain' src={imagen} alt={`Image ${title}`} />
                                    :
                                <img className='w-full h-60 object-contain' src={images[0]} alt={`Image ${title}`} />    
                            }
                            <div className='flex flex-row justify-between w-4/12 mt-2'>
                                <img className='border  mb-2 object-contain w-2/3 mr-2' src={images[0]} alt={`Image ${title}`} onClick={()=>cambiarImagen(images[0])} />
                                <img className='border  mb-2 object-contain w-2/3 mr-2' src={images[1]} alt={`Image ${title}`} onClick={()=>cambiarImagen(images[1])} />
                                <img className='border mb-2 object-cover w-2/3' src={images[2]} alt={`Image ${title}`} onClick={()=>cambiarImagen(images[2])} />
                            </div>
                        </figure>
                    
                        <div className='w-3/6 px-8'>
                            <h1 className='text-black mb-5 font-bold text-4xl'>{title}</h1>
                            <div className='flex flex-row mb-5'>
                                <p className={rate >= 1 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={rate >= 2 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={rate >= 3 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={rate >= 4 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={rate >= 5 ? 'good' : 'bad'}><StarIcon /></p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p>Brand: <span>{brand}</span></p>
                                <span className='font-light'>{category}</span>
                            </div>
                            <p className='font-bold mt-4 flex flex-row justify-end'>Price: <span className='text-red-800 text-2xl ml-4'>${price}</span></p>

                            <p className='font-bold mt-4'>About this article</p>
                            <p>{description}</p>
                        </div>

                        <div className='w-1/6'>
                            <span className='text-red-800 text-2xl'>${price}</span>
                            <p>Free shipping!</p>
                            <p className='text-xs mb-4'>Arrives between <span className='font-bold'>{deliveryDate(today, 'dd/mm/yy', 5)} and el {deliveryDate(today, 'dd/mm/yy', 10)}</span></p>
                            
                            <button
                                type='button'
                                className='flex flex-row items-center bg-orange-200 font-bold border-3 py-1 px-2 rounded-lg'
                                onClick={() => addProductsToCart(item)}
                            >
                                <ShoppingCartIcon className='h-5 w-5 text-black mr-1'></ShoppingCartIcon> Add
                            </button>
                            <button type='button'></button>
                        </div>
                    </div>
                </div>
            </Layout>
            <figure>
                <img src={banner} alt={`Banner ${title}`} className='w-screen' />
            </figure>
        </>
    )
}; 