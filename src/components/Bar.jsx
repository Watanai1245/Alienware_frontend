import React, { useState, useEffect } from "react";
import NewItem from "./NewItem";
import ProductContainer from "./ProductContainer";

const Bar = () => {
  const [items, setItems] = useState([]);
  const [searcAPIData, setSearchAPIData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/MOCK_DATA.json")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setSearchAPIData(result);
      });
  }, []);

  const handleSeachChange = (event) => {
    if (event.target.value === "") {
      setItems(searcAPIData);
    } else {
      const filterResult = searcAPIData.filter((item) =>
        item.Name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setItems(filterResult);
    }
    setFilterValue(event.target.value);
  };

  return (
    <div className="w-[1080px] shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-7 ">
      <div className="ml-8 mt-8">
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
      <table className="w-[1080px] divide-y divide-gray-200">
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
        <ProductContainer products={items} />
      </table>
    </div>
  );
};

export default Bar;
