import React from 'react'
import Link from 'next/link'



const Resume = React.forwardRef<HTMLDivElement>((props, ref) => {

    const marginTop = '20px'
    const marginRight = '20px'
    const marginBottom = '20px'
    const marginLeft = '20px'
    
  
    const getPageMargins = () => {
        return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
      };

    return (

        <div ref={ref}  className="min-h-screen  h-auto lg:mt-6 xl:ml-20 xl:mr-20 lg:ml-15 lg:mr-15 md:ml-8 md:mr-8 ml-4 mr-4 ">
            <style>{getPageMargins()}</style>
            <div className="h-4"></div>
            <h1 className="text-3xl font-bold mb-4">Abhilesh Kumar</h1>
            <p>Contact No: +919083926254, +919064164277</p>
            <div className="flex">
                <div >Email: abhilesh925@gmail.com</div>
                <div className="ml-4"><Link href={'https://github.com/Abhilesh1001/'}>Git</Link></div>
                <div className="ml-4"><Link href={'https://www.linkedin.com/in/abhileshkumar/'}>Linkedin</Link></div>

            </div>


            <h2 className="text-2xl font-bold mt-3 mb-4">Technical Skills</h2>
            <ul>
                <li>Programming Languages: JavaScript, HTML, CSS, Python</li>
                <li>Frameworks/Libraries: React, Redux, Bootstrap, Tailwind CSS, Django, Typescript, Next Js, Django Rest Framework,React Query</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Projects</h2>

            <div className="flex"><div>1)Procurement Management system :</div><div><Link href={'https://materialmovement.vercel.app/'}>Link</Link></div></div>
            <div className="ml-5">Designed and implemented an end-to-end procurement management system encompassing Material Creation, Purchase Request, Purchase Order generation, and Goods Receipt Note</div>

            <div className="flex"><div>2)RD collection, Loan amount tracking and Share holder fund :</div><div><Link href={'https://materialmovement.vercel.app/'}>Link</Link></div></div>

            <div className="ml-5">RD Collection: Developed a user-friendly RD Collection module for tracking daily contributions to Recurring Deposit (RD) accounts. Enabled easy monitoring of daily RD collections and generation of transparent reports for specified date ranges. Loan Amount Collection: Created an intuitive system for seamless lending and daily monitoring of loan amount collections. Integrated a robust tracking mechanism, providing clear insights into daily collections and outstanding balances. Share Holder Fund: Developed a Share Holder Fund module for efficient contribution tracking and fund management. Implemented a secure system with real-time insights into daily share holder fund collections and transparent reporting.</div>
            <div className="flex"><div>3) Ecommerce Application:</div><div><Link href={'https://reactfront-gamma.vercel.app/'}>Link</Link></div></div>
            <div className="ml-5">
                Using HTML, CSS, JavaScript, React, Django rest-framework,
                Tailwind CSS and Python. It features user authentication, registration, login, and password
                reset, custom JWT-based authentication, Dark mode and light mode, React Router DOM
            </div>
            <div>
            </div>
            <div className="flex"><div>3) Movie Application:</div><div><Link href={'https://reactfront-gamma.vercel.app/'}>Link</Link></div> </div>
            <div className="ml-5">
                Using HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS Django restframework, Python and TMDB for movie database. It features user authentication, registration,
                login, forget password through mail communication and password reset. For security, I
                implemented a custom JWT-based authentication system. React Router DOM enables seamless
                single-page navigation, and state management is achieved with React Redux Toolkit. I utilized
                functional components in React for code simplicity and maintainability. This project delivers a
                secure, efficient, and user-friendly Movie App
            </div>
            <div>

            </div>
            


            <h2 className="text-2xl font-bold mt-8 mb-4">Academic Qualifications</h2>
            <li>Completed B. TECH with 8.3 CGPA in Instrumentation and Control Engineering from D.R M.G.R
                Education and Research Institute Chennai</li>
            <li>Completed H.S.C with 61.5% marks from Sindhu Mahavidyalay Nagpur</li>
            <li>Completed S.S.C with 67.5% marks from S.B.H.S Maharajganj Siwa</li>

            <h2 className="text-2xl font-bold mt-8 mb-4">Work Experience</h2>

            <li>Freelancer from August 2022 to till date as React Developer.</li>
            <li>Worked in Everest Parenterals Pvt. Ltd from 30.01.2023 to 10.09.2023</li>
            <li>Worked in Torrent Pharmaceutical Limited from 23.01.2017 to 20.01.2023 date as Executive (non It field)  </li>
        </div>
    );
});

export default Resume


