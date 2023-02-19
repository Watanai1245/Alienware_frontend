import React, { useState, useEffect } from 'react';
import ProductContainer from './ProductContainer';
import { fetchProducts } from '../api';

const Bar = () => {
    const [items, setItems] = useState([]);
    const [searcAPIData, setSearchAPIData] = useState([]);
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        fetchProducts(setItems, setSearchAPIData)
    }, []);


    const handleSeachChange = (event) => {
        if (event.target.value === '') {
            setItems(searcAPIData)
        } else {
            const filterResult = searcAPIData.filter(item => item.Name.toLowerCase().includes(event.target.value.toLowerCase()))
            setItems(filterResult)
        }
        setFilterValue(event.target.value)
    }

    return (
        <div className="w-[1200px] shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-7 ">
            <div className="flex justify-center mt-4 mb-4">
                <input
                    type={"text"}
                    className="
                font-IBMPlexSansThai 
                bg-[#EFEFEF]
                placeholder:text-zinc-500
                text-lg
                pl-5 
                w-[631px]
                h-[40px]
                m-2
                ml-4
                mt-2
                border-2 
                border-orange-700
                focus:outline-none
                focus:border-orange-700
                rounded-full
                "
                    placeholder="Seach Product"
                    variant="outlined"
                    value={filterValue}
                    onInput={(event) => handleSeachChange(event)}
                />
            </div>
            <table className="w-[1200px] divide-y divide-gray-200">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="px-6 py-3 text-center">Image</th>
                        <th className="px-6 py-3 text-center">Name</th>
                        <th className="px-6 py-3 text-center">PID</th>
                        <th className="px-6 py-3 text-center">CID</th>
                        <th className="px-6 py-3 text-center">Price</th>
                        <th className="px-6 py-3 text-center">Stock</th>
                        <th className="px-6 py-3 text-center">Detail</th>
                        <th className="px-6 py-3 text-center">Status</th>
                        <th className="px-6 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <ProductContainer products={items} />
                </tbody>
            </table>
        </div>
    );
};

export default Bar;
