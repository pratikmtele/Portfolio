import React from "react";
import { Container, Project } from "./index.js";
import { FoodApplication } from "../assets/index.js";

function Projects() {
  const projects = [
    {
      title: "Food Ordering Application",
      description:
        "Built a secure administrative dashboard with role-based access for authorized users.Implemented features for admins to efficiently manage menus, food items, and discount coupons.Integrated Stripe for seamless online payment processing.Developed a user-friendly search functionality to help users find their favorite dishes easily",
      coverImage: FoodApplication,
      isCodeSourced: true,
      githubLink: "https://github.com/pratikmtele/food_ordering",
      isSiteLive: true,
      siteLink: "https://blissbites.netlify.app",
      techs: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Bootstrap",
        "NodeJs",
        "Express",
        "Stripe",
        "MongoDB",
      ],
    },
  ];

  return (
    <div>
      <Container>
        <section id="projects" className="mt-14 sm:mt-20">
          <div className="mb-14 sm:mb-20 flex flex-col items-center">
            <h1 className="text-mxl inline-block font-bold mb-2 sm:text-2xl">
              Projects
            </h1>
            <div className="h-[5px] gradient-btn w-[73px] sm:w-[88px] rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-10">
            {projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                coverImage={project.coverImage}
                isCodeSourced={project.isCodeSourced}
                githubLink={project.githubLink}
                isSiteLive={project.isSiteLive}
                siteLink={project.siteLink}
                techs={project.techs}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Projects;
