import ProjectCard from "../ProjectCard";

export default function ProjectSection({ projects }) {
  return (
    <section className="min-h-screen py-10 lg:py-16" id="projects">
      <div className="min-h-screen text-4xl ">
        <div className="mb-16 text-center font-bold">
          <h2>Projects</h2>
        </div>
        <div className="mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(projects).map((project, index) => (
              <ProjectCard
                key={index}
                projectImage={project.projectImage}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                tags={project.tags}
                webUrl={project.webUrl}
                githubUrl={project.githubUrl}
              />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
