import { skillsData } from "@/assets/assets";

const Skills = () => {
  return (
    <div
      className="relative h-fit min-h-screen w-full bg-gray-50 py-12 md:py-14"
      id="skill"
    >
      <h2 className="text-center font-Ovo text-3xl tracking-wide sm:text-4xl md:text-5xl">
        My Skills
      </h2>
      <p className="mt-3 text-center font-Ovo text-sm sm:text-lg">
        Technologies I have experience with.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-6 px-5 sm:grid-cols-3 sm:px-10 md:grid-cols-4 lg:grid-cols-5 lg:px-24 xl:grid-cols-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:p-6"
          >
            <img
              src={skill.logo || "/fallback-image.png"}
              alt={`${skill.name} Logo`}
              className="h-12 transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
            />
            <p className="mt-3 text-sm font-medium text-gray-800 md:text-lg">
              {skill.name}
            </p>
            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
