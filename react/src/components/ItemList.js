import React from 'react';
import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
    return (
        <div className='w-10/16 flex flex-col content-center justify-center'>
            {items.map((item) => (
                <div key={item.card.info.id} className='text-left p-2 m-2 border border-gray-200 border-b-2 flex '>
                    <div className='p-2 w-12/14 flex flex-col'>
                        <span className='text-2xl font-bold'>{item.card.info.name}</span>
                        <span className='text-2xl m-1'>  
                            ${item.card.info.price ? 
                            item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        </span>
                        <p className='text-s'>{item.card.info.description}</p>
                    </div>
                    <div className='max-w-40  '>
                        <img src={CDN_URL + item.card.info.imageId} className='w-56 rounded-3xl' alt={item.card.info.name} />
                        <button className='p-2 mx-15 rounded-lg bg-white shadow-lg '> ADD +</button>
                    </div>
                        <div className='absolute justify-end'>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;