import React from 'react'
import ProjectCard from './ProjectCard'
import { baseurl } from '@/data/dataall'

async function projectlist(){
    let data = await fetch(`${baseurl}/pro/project`, { cache: 'force-cache' })
    let res = await data.json()
    return res
}

const ProjectFetch = async () => {
    let project = await projectlist()
    console.log(project,'.................')

  return (
    <div className='bg-green-500 dark:bg-gray-700'>
    <div className=" dark:bg-gray-700 container pt-10 bg-green-500">
    <h1 className="text-3xl font-bold mb-8">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {project.map((projects:any, index:number) => (
        <ProjectCard key={index} project={projects} />
      ))}
    </div>
  </div>
  </div>
  )
}

export default ProjectFetch