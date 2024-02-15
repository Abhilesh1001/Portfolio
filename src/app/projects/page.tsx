import React from 'react'

import type { Metadata } from "next";
import ProjectFetch from './ProjectFetch';


export const metadata: Metadata = {
  title: "Project : Project Page",
  description: "Abhilesh Portfolio Project Page",
};

const Project = () => {

  return (
   <ProjectFetch />
  )
}

export default Project