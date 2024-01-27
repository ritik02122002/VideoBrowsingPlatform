import React from 'react'
import { BUTTON_LIST_ARRAY } from '../constants'

const ButtonList = () => {
  return (
    <ul className='flex justify-center flex-wrap '>
      {
        BUTTON_LIST_ARRAY.map(button => (
          <li key={button} className='bg-gray-200 rounded-lg p-1 px-2 m-2 whitespace-nowrap'>{button}</li>
        ))
      }
    </ul>
  )
}

export default ButtonList