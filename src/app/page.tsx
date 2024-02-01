'use client'
import { useReactToPrint } from 'react-to-print';
import Resume from "./components/resume/Resume";

import { useRef } from 'react';

export default function Home() {

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

  });

 

  return (
    <div >
      
   
     <Resume ref={componentRef}  />
     
     <button className="ml-10 bg-blue-600 p-2 rounded" onClick={handlePrint}>Print</button>
      <div className="mb-4"></div>
      </div>
  );
}
