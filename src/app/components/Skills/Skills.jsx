import { skillsData } from "@/assets/assets";

const Skills = () => {
  return (
    <div className="py-10" id="skill">
      <h2 className="font-Ovo mt-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        My Skills
      </h2>

      <div className="skills grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:px-24 mt-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill flex flex-col items-center text-center px-5 py-3"
          >
            <img
              src={skill.logo || "/fallback-image.png"} 
              alt={`${skill.name} Logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 mb-4" 
            />
            <p className="skill-name text-sm sm:text-xl md:text-2xl lg:text-2xl mt-2">{skill.name}</p>
            <p className="skill-description text-sm sm:text-base md:text-lg text-gray-500 mt-1">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
