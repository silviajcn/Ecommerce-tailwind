import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {

    // const addItem = () => {

    // }
    // const deleteItem = () => {

    // }

    // const path = window.location.pathname;
    // let currentPath = path.includes('/my-order');

    return (
        <div className='flex justify-between items-center px-4 mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full object-contain' src={imageUrl} alt={`Image ${title}`} />
                </figure>
                <div>
                    <p className='text-sm font-light'>{title}</p>
                    {/* {
                        currentPath ?
                            <></>
                            :
                            <div className='flex flex-grow items-center'>
                                <button className='flex justify-center items-center bg-white w-4 h-4 rounded-full m-2 p-1 border-circle'>-</button>
                                <button className='flex justify-center items-center bg-white w-4 h-4 rounded-full p-1 border-circle'>+</button>
                            </div>
                    } */}
                    {/* <p>Precio por cantidad: ${price} x {quantity} = <strong>${price * quantity }</strong></p> */}
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='font-medium text-lg text-red-800'>${price}</p>
                {
                    handleDelete &&
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => handleDelete(id)}
                    ></XMarkIcon>
                }
            </div>
        </div>
    )
};

OrderCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    handleDelete: PropTypes.func
}