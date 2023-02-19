import * as React from "react";
import AddProduct from './AddProduct.jsx'
import { useState } from "react";

export default function Navbar() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const handleOnClose = () => setShowAddProduct(false);

  return (
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
          Alienware Market
        </span>
        <button
            onClick={() => setShowAddProduct(true)}
            type="button"
            className=" rounded-full text-white bg-orange-700 hover:bg-orange-600  font-IBMPlexSansThai px-5 py-2 text-center ml-8 mb-2 mt-2 hover:border-black ease-linear transition-all">
            + Add Product
          </button>
      </div>
      <AddProduct onClose={handleOnClose} visible={showAddProduct} />
    </nav>
  );
}
