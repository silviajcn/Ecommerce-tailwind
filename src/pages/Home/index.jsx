import { useState, useEffect } from 'react';
import { Card, Layout } from '../../components';

export const Home = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(resp => resp.json())
            .then(data => setItems(data))
    }, []);

    return (
        <Layout>
            <h1 className='mb-5 font-bold text-4xl'>Shopi</h1>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }   
            </div>
        </Layout>
    )
};