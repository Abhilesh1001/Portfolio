
'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
    const {pending}= useFormStatus()
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {pending ?'sending':'send message'}
   </button>
  )
}

export default Button