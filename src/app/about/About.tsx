// pages/about.js
import Link from 'next/link';
import Image from 'next/image';
import  profileimage  from '../../../src/app/assets/1.jpg'

const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950">
            <div className="max-w-4xl p-8 bg-slate-800 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <Image src={profileimage} alt="Profile Picture" width={500}
                            height={500} className="w-64 h-64 rounded-full mb-4" />
                            
                        <h2 className="text-2xl font-semibold mb-2">Abhileh Kumar</h2>
                        <div className="text-gray-50 mb-4">Web Developer</div>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/in/abhileshkumar/" className="text-green-900 hover:underline">LinkedIn</Link>
                            <Link href="https://github.com/Abhilesh1001" className="text-blue-500 hover:underline">GitHub</Link>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg text-slate-50 mb-4">I am Abhilesh Kumar, a skilled React Developer with extensive experience in building dynamic web applications. I am passionate about leveraging my technical expertise to create seamless user experiences and innovative solutions.</div>
                        <div className="text-lg text-gray-50">Technical Skills</div>
                        <div >
                            Programming Languages: JavaScript, HTML, CSS, Python
                            <div> Frameworks/Libraries: React, Redux, Bootstrap, Tailwind CSS, Django, Typescript, Next Js, Django Rest,Framework,React Query</div>

                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link href="/contact" className="text-blue-500 hover:underline">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
