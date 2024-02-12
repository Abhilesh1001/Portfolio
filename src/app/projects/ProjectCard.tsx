import Imageurl from '../assets/3.png'
import Imageurl4 from '../assets/4.png'

import Image from 'next/image'


interface projectprops{

    project:{
        name: string,
        description: string,
        imageUrl: string,
        skilUsed : string,
        githubLinkFrontend: string,
        githubLinkBAckend: string,
        backendLink: string,
        frontendLink: string,
    }
     
}


const ProjectCard = (props:projectprops) => {
    const {project} = props
    console.log(project.imageUrl)

    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg  bg-gray-700">
        <Image className="w-full h-64 object-cover" src={Imageurl4} alt={project.name} width={800} height={800} />
          <div className="font-bold text-xl mb-2 mx-2 mt-2">{project.name}</div>
        <div className="px-6 py-2">
          <p className="text-gray-50 text-base">{project.description}</p>
        </div>
        <div className="px-6 py-4">
          <a href={project.githubLinkFrontend} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">GitHub Frontend</a>
          <a href={project.githubLinkBAckend} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">GitHub Backend</a>
          <a href={project.backendLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Backend</a>
          <a href={project.frontendLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Frontend</a>
        </div>
      </div>
    );
  };

  export default ProjectCard