import React from 'react'

const Shopcart = ({items}) => {
  return (
    <div className="h-44 w-96 m-6 space-x-4 border-2 items-center flex rounded-xl hover:shadow-md">
      <img src={items.image} className="h-40 p-4" />
      <div className="flex flex-col  w-full h-full space-y-9">
        <h1 className="mt-6 font-medium text-center">{items.title}</h1>
        <div className="flex w-full  justify-center space-x-4 ">
          <button className="hover:bg-yellow-400 rounded-full p-2">➖</button>
          <h1 className="text-xl  w-12 align-middle text-center p-2">1</h1>
          <button className="hover:bg-yellow-400 rounded-full p-2">➕</button>
        </div>
      </div>
    </div>
  )
}

export default Shopcart