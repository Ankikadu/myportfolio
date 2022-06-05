import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Zappos.com clone",
    img: "/zappos.png",
    link: "https://zapposwebsite.vercel.app/",
    git: "https://github.com/Ankikadu/Zappos.git",
    about:
      "Zappos is a website use for online shopping specially for women clothes. Implemented features to get data from backend.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
       <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
 
    ],
  },
  {
    name: "BestBuy.com clone",
    img: "/Bestbuy.png",
    link: "https://merry-kitten-8e2680.netlify.app/",
    git: "https://github.com/Ankikadu/Best_buy_wesite_clone_project.git",
    about:
      " BestBuy is a online shooping website. This was a team project where I with my teammates had created a shopping platform specially for electronics product. Tech Stack which we used in this project is HTML, CSS, JS.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
       
    ],
  }
  
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
