// pages/about.js
import Link from 'next/link';
import Image from 'next/image';
import profileimage from '../../../src/app/assets/1.jpg'
import { TbPointFilled } from "react-icons/tb";



const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center pt-6 pb-4 items-center dark:bg-gray-950 bg-green-700">
            <div className="max-w-4xl p-8 bg-green-900 dark:bg-slate-800 bg- rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <Image src={profileimage} alt="Profile Picture" width={500}
                            height={500} className="w-64 h-64 rounded-full mb-4" />

                        <h2 className="text-2xl font-semibold mb-2  text-gray-50">Abhileh Kumar</h2>
                        <div className="text-gray-50 mb-4 ">Web Developer</div>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/in/abhileshkumar/" className="text-gray-50 hover:underline ">LinkedIn</Link>
                            <Link href="https://github.com/Abhilesh1001" className="text-gray-50 hover:underline">GitHub</Link>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-50">Technical Skills :</div>
                        <div className='text-gray-50'>
                            Programming Languages: JavaScript, HTML, CSS, Python
                            <div className='text-gray-50'> Frameworks/Libraries: React, Redux, Bootstrap, Tailwind CSS, Django, Typescript, Next Js, Django Rest,Framework,React Query</div>
                        </div>
                        <div className="text-lg mt-4 text-gray-50">Qualification :</div>
                        <div className='text-gray-50'>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Completed B. TECH with 8.3 CGPA in Instrumentation and Control Engineering from D.R M.G.R Education and Research Institute Chennai</span></div>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Completed H.S.C with 61.5% marks from Sindhu Mahavidyalay Nagpur</span></div>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Completed S.S.C with 67.5% marks from S.B.H.S Maharajganj Siwan</span></div>
                        </div>  

                        <div className="text-lg mt-4 text-gray-50">Work Experience :</div>
                        <div className='text-gray-50'>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Freelancer from August 2022 to till date as React Developer</span></div>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Worked in Everest Parenterals Pvt. Ltd from 30.01.2023 to 10.09.2023</span></div>
                            <div className='text-gray-50 flex'><TbPointFilled className='text-2xl mr-2' /> <span>Worked in Torrent Pharmaceutical Limited from 23.01.2017 to 20.01.2023 date as Executive (non It
                                field)</span></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link href="/contact" className="text-gray-50 hover:underline">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
