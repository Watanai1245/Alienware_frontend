import React,{useState, useEffect} from 'react'
import NewItem from './NewItem';

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
                <tbody className="text-center">
                    <NewItem pic="https://static.trueplookpanya.com/tppy/member/m_557500_560000/559381/cms/images/Photo%2C%20Picture%2C%20Image%20%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%89%20%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3%202.jpg" name="test1" />

                </tbody>
            </table>
        </div>
    )
}

export default Bar;