'use client'
import React,{useState} from 'react'
import {habdleSubmit} from '@/action/messageaction'
import { useRef } from 'react'
import Loading from './loading/Loading'

const Form = () => {
    const [message,setMessage] = useState()
    const ref:any = useRef(null)
  return (
    <div>    
        <div className='h-10'>{message && <div className='bg-green-500 h-10 p-2 rounded'>{message}</div>}</div>
    <form ref={ref} action={async function name(formData:FormData) {
        const res:any = await habdleSubmit(formData)
        ref?.current?.reset()
        setMessage(res)
    } } >
    <div className="mb-1">
      <label htmlFor="name" className="block dark:text-gray-50 font-bold mb-2">Name</label>
      <input type="text" id="name" className="borde text-gray-700 border-gray-300  px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-500" name='name' required />
    </div>
    <div className="mb-1">
      <label htmlFor="email" className="block dark:text-gray-50 font-bold">Email</label>
      <input type="email" id="email" className="border border-gray-300 text-gray-700 rounded-md px-3 py-1 text-sm w-full focus:outline-none focus:border-blue-500" name='email' required />
    </div>
    <div className="mb-1">
      <label htmlFor="message" className="block dark:text-gray-50 font-bold mb-2">Message</label>
      <textarea id="message" className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full h-20 resize-none focus:outline-none focus:border-blue-500" name='message' required />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
  </form>
  </div>
  )
}

export default Form