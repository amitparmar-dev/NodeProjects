import React from 'react'

export default function Input(props) {
    const [value, setValue] = React.useState('');
    const handleKeyPress = key =>{
        if(key.code === 'Enter'){
            props.onKeyPress(value);
        }
    }
    return (
    <div className='search-box'>
        <input 
            className='search-bar'
            type='text'
            placeholder='City Name'
            value={value}
            onKeyPress={handleKeyPress}
            onChange={(e)=>setValue(e.target.value)}
        />
    </div>
  )
}
