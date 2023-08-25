import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Project(){
    const projectsData = [
        {
          image: "/c.png",
          projectName: "Parcel shipping",
          projectLink: "https://github.com/jughead-z/parcel-shipping",
          projectDescription:
            "This is a Desktop application for parcel shipping built witth c# and sql with some new function.",
          projectTech: [
            "C#",
            "Sql",
          ],
          projectExternalLinks: {
            github: "https://github.com/jughead-z/parcel-shipping",
            externalLink: "",
          },
        },
        {
          image: "/php.png",
          projectName: "Parcel Shipping Php",
          projectLink: "https://github.com/jughead-z/parcel-shipping-php",
          projectDescription:
            "This is a web application for parcel shipping that inculde somee good functions like parcel tracking , email notifcation...",
          projectTech: [
            "Php",
            "Javascrript",
            "Mysql",
            "Bootstrap",
          ],
          projectExternalLinks: {
            github: "https://github.com/jughead-z/parcel-shipping-php",
            externalLink: "",
          },
        },
        {
          image: "/zelda.png",
          projectName: "Zelda web game ",
          projectLink: "https://abramizelda.netlify.app",
          projectDescription:
            "I made a zelda game like the one in gameboy to practice my coding skils.",
          projectTech: [
            "Javascript"
          ],
          projectExternalLinks: {
            github: "",
            externalLink: "https://abramizelda.netlify.app",
          },
        },
        {
            image: "/traveling.png",
            projectName: "Travling landing page",
            projectLink: "https://travelle-web.netlify.app",
            projectDescription:
              "I made a travling landing page as my first project in web dev.",
            projectTech: [
              "Javascript",
              "Html",
              "Css"
            ],
            projectExternalLinks: {
              github: "",
              externalLink: "https://travelle-web.netlify.app",
            },
        },
        {
            image: "/aeriamall.png",
            projectName: "Aeria mall",
            projectLink: "https://aeriamall.com/",
            projectDescription:
              "A mall website ",
            projectTech: [
              "Angular",
              "Strapi",
              "Bootstrap",
              "Mongodb"
            ],
            projectExternalLinks: {
              github: "",
              externalLink: "https://aeriamall.com/",
            },
        },
          
      ];

    return (
        <div className="projects" id="work ">
            <motion.div className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}>
                <h2>Some Things I&apos;ve Built</h2>
            </motion.div>
            <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div className="project" key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Project;