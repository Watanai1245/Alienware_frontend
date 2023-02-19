import React, { useState, useEffect } from 'react'
import NewItem from './NewItem';
import ProductContainer from './ProductContainer';

const Bar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/MOCK_DATA.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
            )
    }, [])

    return (
        <div className="w-[1080px] shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-7 ">
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