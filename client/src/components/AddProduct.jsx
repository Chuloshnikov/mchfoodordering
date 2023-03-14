import React from 'react'

export const AddProduct = ({ onAddProduct }) => {
  return (
    <div className='flex justify-end'>
        <button className='bg-yellow-400
        hover:bg-yellow-600 rounded-full
        w-5 h-5 flex items-center justify-center text-lg' onClock={onAddProduct}><span>+</span></button>
    </div>
  )
}
