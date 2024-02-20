import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 m-5 bg-gray-400 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
