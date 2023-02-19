import React, { useState } from 'react'
import { matchingApi } from "../axiosConfig";

function Seach() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // function handleSearchBtn(e) {
  //   setIsLoading(true);
  //   matchingApi
  //     .get("/match/findByName/" + search)
  //     .then((res) => {
  //       setProducts(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.data);
  //     })
  //     .finally(setIsLoading(false));
  //   //do something
  // }

  function handleSearchBtn(e) {
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
        placeholder="Seach Product Name"
        variant="outlined"
        value={search}
        // onChange={handleSeachChange}
      />
      <button 
        className='ml-5'
        onClick={handleSearchBtn}
        variant="contained">
        <span className="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block text-white bg-orange-700 hover:bg-orange-600 px-7 py-2 hover:border-black ease-linear transition-all">
          Seach
        </span>
      </button>
    </div>
  )
}

export default Seach
