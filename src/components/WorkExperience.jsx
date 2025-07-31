const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="work-section scroll-offset pt-12 px-2 md:px-12 bg-white"
    >
      <div className="work-heading mb-14 sm:mb-20 flex flex-col items-center">
        <h2 className="text-mxl inline-block font-bold mb-2 sm:text-2xl">
          Work Experience
        </h2>
        <div className="h-[5px] gradient-btn w-[73px] sm:w-[208px] rounded-md"></div>
      </div>
      <div className="work-content flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 md:p-8 mb-10 border border-[#e3e3e3] transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-btn text-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7V3m0 0a1 1 0 00-1-1h-6a1 1 0 00-1 1v4m8 0H8m8 0v4m0 0a1 1 0 001 1h4a1 1 0 001-1V7m-6 4v4m0 0a1 1 0 001 1h4a1 1 0 001-1v-4m-6 4H8m8 0v4m0 0a1 1 0 001 1h4a1 1 0 001-1v-4m-6 4H8"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 tracking-tight">
                  Full Stack Developer
                </h3>
                <span className="text-sm text-gray-500 font-medium">
                  @ Serverwala Cloud Data Center, Mumbai
                </span>
              </div>
            </div>
            <span className="text-sm md:text-xs gradient-btn text-white text-center font-semibold mt-4 sm:mt-0 bg-blue-50 px-3 py-1 rounded-full shadow-sm border border-blue-100">
              Feb 2025 – Present
            </span>
          </div>
          <ul className="space-y-4 text-gray-700 mt-4 pl-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-3 h-3 rounded-full bg-[#5a1edb] flex-shrink-0"></span>
              <span>
                Responsible for maintaining, updating, and optimizing websites
                to ensure modern design and high performance
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-3 h-3 rounded-full bg-[#5a1edb] flex-shrink-0"></span>
              <span>
                Building responsive and modern user interfaces focused on
                usability, visual consistency, and seamless experience across
                devices and screen sizes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-3 h-3 rounded-full bg-[#5a1edb] flex-shrink-0"></span>
              <span>
                Writing clean, maintainable code and integrating APIs to support
                dynamic, data-driven features.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-3 h-3 rounded-full bg-[#5a1edb] flex-shrink-0"></span>
              <span>
                Collaborated with team members to review code, implement
                features, and resolve bugs in an agile development environment.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
