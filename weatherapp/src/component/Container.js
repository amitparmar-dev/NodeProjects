import React from 'react'

export default function Container(props) {
  return (
    <div className='temp-container'>
        <div className='temp'>
            { props.tempObj.temp}&#8451;
        </div>
        <div className='city'>
          {`${props.tempObj.city},${props.tempObj.country}`}
        </div>
    </div>
  )
}
