import React from 'react';


const Button = ({ children }) => {
    return (
        <button className='text-white bg-[#BD5B1E] p-2 text-lg font-bold rounded-xl transition duration-300 cursor-pointer hover:scale-110 hover:bg-[#9f4a15]'>
            {children}
        </button>
    )
}

export default Button;