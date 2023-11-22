import React from 'react'

export const GifCard = ({gifData}) => {
  return (
    <div>
        <img src={gifData.gifUrl}/>
    </div>
  )
}
