import { useState, useEffect } from 'react';
import { Card, Layout, ProductDetail } from '../components';
import { products } from '../assets/products';

export const HomePage = () => {

    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);
    useEffect(() => {

    }, [searchByTitle]);
    
    // const [items, setItems] = useState(null);
    // useEffect(() => {
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then(resp => resp.json())
    //         .then(data => setItems(data))
    // }, []);

    return (
        <Layout>
            <h1 className='mb-5 font-bold text-4xl'>Shopi</h1>
            
            <form className='w-1/2 mb-8'>
                <input
                    type='text'
                    placeholder='Search product...'
                    className='border-2 rounded-lg w-full p-3'
                    onChange={(e) => setSearchByTitle(e.target.value)}
                />
            </form>

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    products?.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }   
            </div>
            <ProductDetail />
        </Layout>
    )
};