import React from 'react'
import About from './About'

import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "About : About Page",
  description: "Abhilesh Portfolio About Page",
};
const Page = () => {
  return (
    <div>
        <About />
    </div>
  )
}

export default Page