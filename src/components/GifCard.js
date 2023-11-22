import React from 'react'

export const GifCard = ({gif}) => {
//    console.log(gif.images.fixed_height.webp)
  return (
    <div className='w-50 border-gray-600 border-2 m-1'>
        
       <img src={gif.images.fixed_height.webp} alt='gif'/>
       
        
    </div>
  )
}
