import React from 'react'
import { projects } from '@/data/dataall'
import ProjectCard from './ProjectCard'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Project : Project Page",
  description: "Abhilesh Portfolio Project Page",
};

const Project = () => {


  return (
    <div className='bg-green-500 dark:bg-gray-700'>
    <div className=" dark:bg-gray-700 container pt-10 bg-green-500">
    <h1 className="text-3xl font-bold mb-8">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
  </div>
  )
}

export default Project