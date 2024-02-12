// pages/contact.js
'use client'

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending message to backend, etc.)
    console.log("Form submitted:", { name, email, message });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col  items-center bg-gray-950">
         <div className="mt-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Contact Address:</h2>
          <div className="text-gray-50">Contact No: +919083926254, +919064164277</div>
          <div className="text-gray-50">Email: abhilesh925@gmail.com</div>
        </div>
      <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="name" className="block text-gray-50 font-bold mb-2">Name</label>
            <input type="text" id="name" className="borde text-gray-700 border-gray-300  px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="block text-gray-50 font-bold">Email</label>
            <input type="email" id="email" className="border border-gray-300 text-gray-700 rounded-md px-3 py-1 text-sm w-full focus:outline-none focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-1">
            <label htmlFor="message" className="block text-gray-50 font-bold mb-2">Message</label>
            <textarea id="message" className="border text-gray-700 border-gray-300 rounded-md px-3 py-2 w-full h-20 resize-none focus:outline-none focus:border-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
        </form>
       
      </div>
    </div>
  );
};

export default ContactPage;
