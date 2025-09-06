import SkillCard from "../SkillCard";

export default function SkillSection({ skills }) {
  return (
    <section className="min-h-screen pt-16 lg:py-16" id="skills">
      <div className="min-h-screen text-4xl mt-10 ">
        <div className="text-center font-bold">
          <h2>Development Skills</h2>
        </div>
        <div className="md:py-16 max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-8">DevOps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.devops_skills).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <h3 className="text-2xl font-semibold mb-8">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.frontend_skills).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <h3 className="text-2xl font-semibold mb-8">Backend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.backend_skills).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <h3 className="text-2xl font-semibold mb-8">
              Database Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.database_skills).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <h3 className="text-2xl font-semibold mb-8">
              Programming Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.programming_skills).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <h3 className="text-2xl font-semibold mb-8">Others</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(skills.others).map((skill, index) => (
                <SkillCard
                  key={index}
                  logoUrl={skill.logoUrl}
                  title={skill.title}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
