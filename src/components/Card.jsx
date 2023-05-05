import PropTypes from 'prop-types';
import {
    PlusIcon,
    // CheckIcon
} from '@heroicons/react/24/solid';

export const Card = ({ item }) => {
    
    const { title, price,
        // descrption,
        category, images } = item;

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center">{category.name}</span>
                <img src={images[2]} alt={`image ${title}`} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"><PlusIcon className='h-6 w-6 text-black'></PlusIcon></div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    )
};

Card.propTypes = {
    item: PropTypes.object
}