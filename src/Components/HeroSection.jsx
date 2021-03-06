import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"

import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

import { RiDownloadLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles({
  contactBtn: {
    color: "white",

    backgroundColor: "rgb(8, 111, 143)",
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "rgb(21, 138, 173)",
    },
  },
  linkedInIcon: {
    fontSize: "40px",

    color: "rgb(8, 111, 143)",
    "&:hover": {
      backgroundColor: "rgb(17, 155, 197)",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",

    "&:hover": {
      backgroundColor: "rgb(100, 100, 100)",
    },
  },
  a: {
    textDecoration: "none",
  },
})
export function HeroSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi,</p>
          <p>
            I am <span>Ankita</span>{" "}
          </p>
          <p>Web Developer</p>
          <a
            href="https://drive.google.com/file/d/1u0_tj_VWCgy0w0Pv4H03W5X2pTpYRk9p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" className={classes.contactBtn}>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a>
        </div>

        <div className={styles.photoCont}>
          <img
            src="./logo2.jpg"
            alt=""
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ankita-kadu/"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Ankikadu"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
      </Fade>
    </div>
  )
}
