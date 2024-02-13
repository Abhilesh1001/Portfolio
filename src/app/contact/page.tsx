import React from 'react'
import { Metadata } from 'next';

import ContactPage from './Contact'

export const metadata: Metadata = {
  title: "Contact : Contact Page",
  description: "Abhilesh Portfolio Contact Page",
};

const Contact = () => {
  return (
    <div>
        <ContactPage />
    </div>
  )
}

export default Contact