import React, { useState, useEffect } from 'react';
import ProductContainer from './ProductContainer';
import { fetchProducts } from '../api';

const Bar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchProducts(setItems)
    }, [])

    return (
        <div className="w-[1080px] shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-7 ">
            <table className="w-[1080px] divide-y divide-gray-200">
                <thead className="bg-gray-300">
                    <tr >
                        <th className='px-6 py-3 text-center'>Image</th>
                        <th className='px-6 py-3 text-center'>Name</th>
                        <th className='px-6 py-3 text-center'>PID</th>
                        <th className='px-6 py-3 text-center'>CID</th>
                        <th className='px-6 py-3 text-center'>Price</th>
                        <th className='px-6 py-3 text-center'>Stock</th>
                        <th className='px-6 py-3 text-center'>Detail</th>
                        <th className='px-6 py-3 text-center'>Status</th>
                        <th className='px-6 py-3 text-center'>Action</th>
                    </tr>
                </thead>
                <ProductContainer products={items} />
            </table>
        </div>
    )
}

export default Bar;