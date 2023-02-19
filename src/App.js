import React from 'react';
import { useState } from 'react';
import Navbar from './layout/Navbar';
import Seach from './layout/Seach';
import AddProduct from './layout/AddProduct';


import Bar from './components/Bar';

// import Navbar from './layout/Navbar';
// import EditProduct from './Products/EditProduct';

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const handleOnClose = () => setShowAddProduct(false)
  return (
    <div>
      <Navbar />
      <div className='flex flex-row justify-center'>
        <Seach />
        <div>
          <button
            onClick={() => setShowAddProduct(true)}
            type="button"
            className="rounded-full text-white bg-orange-700 hover:bg-orange-600  font-IBMPlexSansThai px-5 py-2 text-center ml-8 mb-2 mt-10 hover:border-black ease-linear transition-all">
            + Add Product
          </button>
          <AddProduct onClose={handleOnClose} visible={showAddProduct} />
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Bar />
      </div>
    </div>
  );
}

export default App;
