import { motion } from "framer-motion";
import { skillsData } from "@/assets/assets";

const Skills = () => {
  
  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        duration: 0.8, 
        ease: "easeOut", 
      },
    },
  };

  return (
    <div className="py-10" id="skill">
      <h2 className="font-Ovo mt-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        My Skills
      </h2>

      <div className="skills grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:px-24 mt-10">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill flex flex-col items-center text-center px-5 py-3"
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.2 }} 
            variants={cardVariants}
          >
            <img
              src={skill.logo || "/fallback-image.png"}
              alt={`${skill.name} Logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 mb-4"
            />
            <p className="skill-name text-sm sm:text-xl md:text-2xl lg:text-2xl mt-2">
              {skill.name}
            </p>
            <p className="skill-description text-sm sm:text-base md:text-lg text-gray-500 mt-1">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
