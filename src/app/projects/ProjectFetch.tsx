'use client'
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { baseurl } from "@/data/dataall";

const ProjectFetch = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        let response = await fetch(`${baseurl}/pro/project`, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        let data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          setError("No projects available.");
        } else {
          setProjects(data);
        }
      } catch (err: any) {
        setError("Failed to fetch projects. Please try again.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="bg-green-500 dark:bg-gray-700 min-h-screen">
      <div className="container pt-10">
        <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>

        {loading ? (
          <p className="text-center text-white">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFetch;
