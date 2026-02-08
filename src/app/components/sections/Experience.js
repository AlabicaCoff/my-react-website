export default function ExperienceSection({ experiences }) {
  return (
    <section className="min-h-screen py-10 lg:py-16" id="experience">
      <div className="min-h-screen">
        <div className="mb-16 text-center font-bold text-4xl">
          <h2>Experiences</h2>
        </div>

        {Object.values(experiences).map((experience, index) => (
          <div key={index} className="p-4">
            <h3 className="text-white text-xl font-semibold">
              {experience.position}
            </h3>
            <div className="flex justify-between">
              <p className="text-gray-400">{experience.company}</p>
              <p className="text-gray-400">{experience.duration}</p>
            </div>
            <p className="text-white mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
