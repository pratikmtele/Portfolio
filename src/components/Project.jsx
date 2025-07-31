function Project({
  coverImage,
  title,
  description,
  isCodeSourced,
  githubLink,
  isSiteLive,
  siteLink,
  techs,
}) {
  return (
    <div className="project sm:w-[385px] bg-white dark:bg-white/10 border border-light-gray dark:border-none h-fit rounded-lg overflow-hidden">
      <img
        src={coverImage}
        alt="Project 1"
        className="w-full sm:h-[300px] object-cover"
      />
      <div>
        <h1 className="font-bold text-lg ml-5 mt-4 dark:text-white">{title}</h1>
        <div id="links" className="flex">
          {isCodeSourced && (
            <a
              href={githubLink}
              target="_blank"
              className="flex items-center px-2 max-w-36 h-[25px] mt-4 ml-5 border border-light-gray text-sm cursor-pointer rounded-md"
            >
              <i class="fa-brands fa-github w-6 dark:text-white"></i>
              <span className="text-[12px] dark:text-white">Code Source</span>
            </a>
          )}
          {isSiteLive && (
            <a
              href={siteLink}
              target="_blank"
              className="flex items-center px-2 max-w-36 h-[25px] mt-4 ml-5 border border-light-gray text-sm cursor-pointer"
            >
              <i class="fa-solid fa-arrow-up-right-from-square w-6 dark:text-white"></i>
              <span className="text-[12px] dark:text-white">Check Live Site</span>
            </a>
          )}
        </div>
        <p className="mx-5 text-sm mt-4 text-gray dark:text-white">{description}</p>
        <div className="my-4 mx-5 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <div
              key={tech}
              className="w-fit text-sm flex items-center bg-gray-white dark:bg-white/15 dark:text-white py-1 px-2 border border-[#e3e3e3] dark:border-none rounded-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
