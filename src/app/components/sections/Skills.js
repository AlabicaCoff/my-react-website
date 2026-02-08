"use client";

import { useState } from "react";
import SkillCard from "../Skillcard";

export default function SkillSection({ skills }) {
  const skillCategories = Object.keys(skills);

  const [selectedSkillCategory, setSelectedSkillCategory] = useState(
    skillCategories[0],
  );

  const handleCategoryClick = (category) => {
    setSelectedSkillCategory(category);
  };

  return (
    <section className="min-h-screen pt-16 lg:py-16" id="skills">
      <div className="min-h-screen text-4xl mt-10 ">
        <div className="text-center font-bold">
          <h2>Development Skills</h2>
        </div>
        <ul className="flex justify-center gap-4 my-8 flex-wrap">
          {skillCategories.map((category, index) => (
            <li key={index}>
              <button
                className={`text-lg px-4 py-2 rounded-md cursor-pointer ${category === selectedSkillCategory ? "bg-[#37353E] text-white" : "bg-white text-black"}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-8">
              {selectedSkillCategory}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(skills[selectedSkillCategory]).map(
                (skill, index) => (
                  <SkillCard
                    key={index}
                    logoUrl={skill.logoUrl}
                    title={skill.title}
                    level={skill.level}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
