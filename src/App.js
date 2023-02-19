import React from 'react';
import Navbar from './layout/Navbar';

import Bar from './components/Bar';

function App() {
  return (
    <div>
      <Navbar />
      <div div className='flex flex-row justify-center' >
        <Bar />
      </div>
    </div >
  );
}

export default App;
