import React from 'react'
import TextField from '@mui/material/TextField';

function Seach() {

  const [products, setProducts] = React.useState(null);
  let [search, setSearch] = React.useState(null);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  function onSearch() {
    setProducts(null);
    console.log("search")
  }

  return (
    <div className='ml-8 mt-8'>
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
        onChange={handleChange}
      />
      <button onClick={onSearch} className='ml-5' variant="contained">
        <span className="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block text-white bg-orange-700 hover:bg-orange-600 px-7 py-2 hover:bg-slate-700 hover:border-black ease-linear transition-all">
          Seach
        </span>
      </button>
    </div>
  )
}

export default Seach
