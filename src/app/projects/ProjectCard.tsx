import Imageurl from '../assets/3.png'
import Imageurl4 from '../assets/4.png'

import Image from 'next/image'
import { baseurl } from '@/data/dataall'


interface projectprops{

    project:{
        name: string,
        desc: string,
        image: string,
        skil : string,
        githubLinkFrontend: string,
        githubLinkBAckend: string,
        backendLink:string,
        frontendLink: string,
    }
     
}


const ProjectCard = (props:projectprops) => {
    const {project} = props
    const image = `${baseurl}${project.image}`
 

    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg  bg-green-800 dark:bg-gray-700">
        <img className="p-2  rounded object-cover " src={image} alt={project.name}  />
          <div className="font-bold text-xl mb-2 mx-2 mt-2 text-gray-50">{project.name}</div>
          <div className="font-bold  mb-2 mx-2 mt-2 text-gray-50">Skills : {project.skil}</div>
        <div className="px-6 py-2">
          <p className="text-gray-50 text-base">{project.desc}</p>
        </div>
        <div className="px-6 py-4">
          <a href={project.frontendLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Project Link</a>
          <a href={project.githubLinkFrontend} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">GitHub Frontend</a>
          <a href={project.githubLinkBAckend} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">GitHub Backend</a>
          <a href={project.backendLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Backend</a>
        </div>
      </div>
    );
  };

  export default ProjectCard