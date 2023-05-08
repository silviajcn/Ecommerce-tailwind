import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderCard = ({id, title, imageUrl, price, handleDelete}) => {

    return (
        <div className='flex justify-between items-center px-4 mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full object-contain' src={imageUrl[0]} alt={`Image ${title}`} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
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
    imageUrl: PropTypes.array,
    price: PropTypes.number,
    handleDelete: PropTypes.func
}