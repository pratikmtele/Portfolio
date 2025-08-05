function Skill({ name, icon }) {
  return (
    <div className="skill-card transition-all bg-gray-white dark:bg-white/10 dark:backdrop-blur-sm dark:text-white rounded-md flex shadow-md items-center w-[110px] h-[50px] gap-2 md:w-[190px] lg:w-[223px] md:h-[78px] md:gap-5 md:p-3">
      <img
        src={icon}
        alt={name}
        className="w-[24px] md:w-[61px] md:h-[54px] ml-2 sm:ml-0"
      />
      <p className="text-sm md:text-md">{name}</p>
    </div>
  );
}

export default Skill;
