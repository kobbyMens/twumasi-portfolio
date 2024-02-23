"use client";

import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const projectListRef = useRef(null);
  const isInView = useInView(projectListRef, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-white text-4xl font-bold text-center  my-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={"All"}
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name={"Mobile"}
          onClick={() => handleTagChange("Mobile")}
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          name={"Web"}
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={projectListRef} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
      ;
    </section>
  );
}

export default ProjectsSection;
