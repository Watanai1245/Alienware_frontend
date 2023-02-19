import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='w-screen '>
            <div className='h-16 bg-black '>
                <h1 className='font-bold text-3xl text-white pl-3 pt-3'>Product</h1>
            </div>
            {children}
        </div>
    )
}

export default Layout
