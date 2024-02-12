import React from 'react'
import { projects } from '@/data/dataall'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className="container mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-8">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
  )
}

export default Project