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

                        <h2 className="text-2xl font-semibold mb-2 text-gray-50">Abhileh Kumar</h2>
                        <div className="text-gray-50 mb-2">Senior Executive at Swiss Garnier Genexia Sciences</div>
                        <div className="text-gray-50">and Full Stack Developer</div>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/in/abhileshkumar/" className="text-gray-50 hover:underline ">LinkedIn</Link>
                            <Link href="https://github.com/Abhilesh1001" className="text-gray-50 hover:underline">GitHub</Link>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-50">Technical Skills :</div>
                        <div className='text-gray-50'>
                            <div className='text-gray-50'>•    Control and experience on pharmaceutical industrial machine maintenance HVAC, Split AC, Granulation machines RMG, FBP, shifter, blender, paste kettle, Compression machine, Coating machine, Blister packing machine, Strip packing, Bottle Filling Machine, Bottle Blowing Machine, Bag filling Machine</div>
                            <div className='text-gray-50'> •	Full Stack Devloper with web hosting having knowledge of Django, React Js, Javascript, Python, Next Js, Typescript, Docker , Kubernative   </div>
                            <div className='text-gray-50'> •	Knowledge of process control, control system, industrial instrumentation, digital electronics   </div>
                            <div className='text-gray-50'> •    Basic Knowledge of computer Python, MS excel, MS office, Photoshop, MATLAB, LAB VIEW, AUTO CAD.</div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link href="/contact" className="text-gray-50 hover:underline">
                        Contact Me
                    </Link>
                </div>



                <div className="text-lg mt-4 text-gray-50">Job Responsibility :</div>
                <div className='text-gray-50'>
                    <div className='text-gray-50 flex'> <span>•	Project Implementation, erection, testing and commissioning of Pharmaceuticals, Electrical- Mechanical equipment’s</span></div>
                    <div className='text-gray-50 flex'> <span>•	Troubleshooting and repair 3 Phase system, AC/DC, motor control circuits, contactor, switches, relays, sensors, programmable logic controller (PLC), variable frequency drive (VFD), Ladder Logic, Electrical, Mechanical, Instrumentation and functional block programing, servo motor.  </span></div>
                    <div className='text-gray-50 flex'><span>•	To check preventive maintenance of process and utility equipment on site as per schedule.</span></div>

                    <div className='text-gray-50 flex'> <span>•	Operation and maintenance of DG sets, Air Compressor, Water System.</span></div>
                    <div className='text-gray-50 flex'> <span>•	To carryout SAP activities like, PR, Service Entry sheet and follow up for approval, preparation for Capex Budget and revenue Budget. To carryout Calibration of Instruments as per Schedule.</span></div>

                    <div className='text-gray-50 flex'> <span>•	Preparation and execution of URS, IQ, OQ, PQ, SOP..</span></div>
                    <div className='text-gray-50 flex'> <span>•	Control and experience on pharmaceutical industrial machine maintenance, HVAC, Split AC, Granulation machines RMG, FBD, FBP, Shifter, blender, paste kettle, Compression machine, Coating machine, Blister packing machine, Blister Packing Machine (BQS), strip packing, Bottle Filling Machine, Bottle Blowing Machine, Bag filling Machine, Ampoule Filling Machine, Ampoule Washing Machine, Vial Filing Machine, Vial Washing Machine, Sterilize and desterilize Tunnel. </span></div>
                </div>

                <div className="text-lg mt-4 text-gray-50">Work Experience :</div>
                <div className='text-gray-50'>
                    <div className='text-gray-50 flex'> <span>•	Working in Swiss Garnier Genexiaa sciences Unit II, Sikkim as Senior Executive from 07.05.2024 to till date</span></div>
                    <div className='text-gray-50 flex'> <span>•	Worked in Everest Parenterals Pvt. Ltd from 30.01.2023 to 10.09.2023 Assistant Manager in Engineering Department.</span></div>
                    <div className='text-gray-50 flex'><span>•	Worked in Torrent Pharmaceutical Limited, Sikkim Unit-III from 23.01.2017 to 20.01.2023 date as Executive in Engineering Department. (Prior to its acquisition by Torrent Pharmaceutical Limited, I was employed at Unichem Laboratories Ltd, which was taken over on December, 2017)</span></div>

                    <div className='text-gray-50 flex'> <span>•	Worked in Swiss Garnier Genexiaa sciences as Jr. Executive from 15.10.2015 to 18.01.2017 in engineering department.</span></div>
                    <div className='text-gray-50 flex'> <span>•	Worked in Alpha Form Limited from 04.07.2014 to 07.06.2015.</span></div>
                </div>

                <div className="text-lg mt-4 text-gray-50">Qualification :</div>
                <div className='text-gray-50'>
                    <div className='text-gray-50 flex'> <span>•	Completed B.TECH with 8.3 CGPA in Instrumentation and Control Engineering from D.R M.G.R Education and Research Institute Chennai, in 2013.</span></div>
                    <div className='text-gray-50 flex'><span>•	Completed H.S.C with 61.5% marks from Sindhu Mahavidyalay Nagpur in 2008.</span></div>
                    <div className='text-gray-50 flex'> <span>•	Completed S.S.C with 67.5% marks from S.B.H.S Maharajganj Siwan in 2006.</span></div>
                </div>

                
            </div>
        </div>
    );
};

export default About;
