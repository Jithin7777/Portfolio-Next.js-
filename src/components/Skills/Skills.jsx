import { skillsData } from "@/assets/assets";

const Skills = () => {
  return (
    <div className="py-12 md:py-14 bg-gray-50 relative  h-fit w-full min-h-screen " id="skill">
      <h2 className="font-Ovo text-center text-3xl sm:text-4xl md:text-5xl tracking-wide">
        My Skills
      </h2>
      <p className="text-center font-Ovo text-sm sm:text-lg mt-3">
        Technologies I have experience with.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-5 sm:px-10 lg:px-24 mt-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-3 md:p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-lg"
          >
            <img
              src={skill.logo || "/fallback-image.png"}
              alt={`${skill.name} Logo`}
              className=" h-12 md:w-16 md:h-16  transition-transform duration-300 hover:scale-110"
            />
            <p className="md:text-lg text-sm font-medium text-gray-800 mt-3">
              {skill.name}
            </p>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
