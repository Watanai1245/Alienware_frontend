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
      <div className='flex flex-row'>
      </div>
      <div className='flex flex-row justify-center'>
      <Bar />
      </div>
    </div>
  );
}

export default App;
