import { useReducer, useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import styles from "../components/SkillBox.module.css";
import SkillDisplay from "./SkillDisplay";

// Incorperate some way to display icons of skills so that they can navigate through the different skills. This operate the state.
const initialState = {
  skill: "banana",
  skillDescription: "",
  project: "",
  isLoading: false,
  yearsOfExperience: 1,
  skillLogo: "",
  bgColor: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "skill/react":
      return {
        ...state,
        skill: "react",
        skillDescription:
          "React is my favorite library! I Love how efficient and fast it is!",
        project: "https://youtu.be/ilocOyuerS0",
        yearsOfExperience: 2,
        skillLogo: "/react-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, lightblue, white)",
      };
    case "skill/javascript":
      return {
        ...state,
        skill: "javaScript",
        skillDescription:
          "JavaScript is incredible and I cannot stress its importance! It is what is making all of this happen right now!",
        project: "https://youtu.be/JY8oUxNEByA",
        yearsOfExperience: 2,
        skillLogo: "/javascript-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, yellow, white)",
      };
    case "skill/css":
      return {
        ...state,
        skill: "css",
        skillDescription:
          "CSS is one of my favorite things to do! It is so much fun being creative and designing things just the way you want them!",
        project: "https://youtu.be/fo35K3wcJ9c",
        yearsOfExperience: 2,
        skillLogo: "/css-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, blue, white)",
      };
    case "skill/html":
      return {
        ...state,
        skill: "html",
        skillDescription:
          "HTML is where it all started for me and many others I would imagine. Though it can be viewed by most as simple, I see it as essential and neccissary to learn!",
        project: "https://youtu.be/_vZDpPBjce0",
        yearsOfExperience: 2,
        skillLogo: "/html-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, orange, white)",
      };
    case "skill/nodeJS":
      return {
        ...state,
        skill: "nodeJS",
        skillDescription:
          "Node.JS would be my first backend language to learn. I very much enjoy using it 😀",
        project: "https://youtu.be/oXZHO_oVvfM",
        yearsOfExperience: 2,
        skillLogo: "/nodeJs-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, green, white)",
      };
    case "skill/sql":
      return {
        ...state,
        skill: "sql",
        skillDescription: "SQL is neato mosquito",
        project: "https://youtu.be/SQ6LOdDTYGY",
        yearsOfExperience: 2,
        skillLogo: "/sql-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, lightblue, white)",
      };
    case "skill/adobePhotoshop":
      return {
        ...state,
        skill: "adobePhotoshop",
        skillDescription:
          "I have been using Photoshop for roughly 8 years now! I have used photoshop for graphic design, photo editing, and content creation!",
        project: "photoshopProject",
        yearsOfExperience: 8,
        skillLogo: "/photoshop-100x100.png",
        bgColor: "linear-gradient(to bottom, darkblue, white)",
      };
    case "skill/adobePremierPro":
      return {
        ...state,
        skill: "adobePremierePro",
        skillDescription:
          "Adobe Premier Pro has been my go-to video editing software as of late due to its incredible tools and user prefrences (and because I mainly use Windows😅",
        project: "adobePremierProProject",
        yearsOfExperience: 6,
        skillLogo: "/premierePro-100x100.png",
        bgColor: "linear-gradient(to bottom, purple, white)",
      };
    case "skill/finalCutPro":
      return {
        ...state,
        skill: "finalCutPro",
        skillDescription:
          "Final Cut Pro was actually the first video editing software that I used way back in 2014! I have always found Final Cut Pro to be very user friendly and easy to use. I also find Final Cut Pro capable of getting the job done quick without sacrificing quality!",
        project: "finalCutProProject",
        yearsOfExperience: 10,
        skillLogo: "/finalCutPro-100x100.png",
        bgColor: "linear-gradient(to bottom, pink, white)",
      };
    case "skill/adobeAfterEffects":
      return {
        ...state,
        skill: "adobeAfterEffects",
        skillDescription:
          "Adobe After Effects is the top of the line when it comes to video editting and it is clear to see in the work that it is used for.",
        project: "adobeAfterEffectsProject",
        yearsOfExperience: 3,
        skillLogo: "/afterEffects-100x100.png",
        bgColor: "linear-gradient(to bottom, purple, white)",
      };
    case "skill/adobeIllustrator":
      return {
        ...state,
        skill: "illustrator",
        skillDescription:
          "Adobe Illustrator has been a great tool for me in the last few years. I have used it to take many graphic designs into real world use such as tents or merchandise!",
        project: "illustratorProject",
        yearsOfExperience: 2,
        skillLogo: "/illustrator-100x100.png",
        bgColor: "linear-gradient(to bottom, orangered, white)",
      };
    case "skill/adobeInDesign":
      return {
        ...state,
        skill: "adobeInDesign",
        skillDescription:
          "Adobe InDesign has been my go to adobe product when it comes to postcards, newsletters, and more!",
        project: "adobeInDesignProject",
        yearsOfExperience: 2,
        skillLogo: "/inDesign-100x100.png",
        bgColor: "linear-gradient(to bottom, red, white)",
      };
  }
}

// Skill icons must contain a value so that the dispatch can send the proper one

function SkillBox() {
  const [display, setDisplay] = useState(false);

  const [
    {
      skill,
      skillDescription,
      project,
      isLoading,
      yearsOfExperience,
      skillLogo,
      bgColor,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSkillSwitch(x, imageURL) {
    console.log(x);
    console.log(skill);
    skill === x
      ? setDisplay(!display)
      : dispatch({ type: `skill/${x}`, payload: imageURL });
  }

  return (
    <div
      className={styles.container}
      style={{ background: bgColor === "" ? "" : bgColor }}
    >
      <div className={styles.skillRow}>
        <a onClick={() => handleSkillSwitch("react")}>
          <img src="/react-icon-100x100.png" alt="react logo" />
        </a>
        <a onClick={() => handleSkillSwitch("html")}>
          <img src="/html-icon-100x100.png" alt="html logo" />
        </a>
        <a onClick={() => handleSkillSwitch("css")}>
          <img src="/css-icon-100x100.png" alt="css logo" />
        </a>
        <a onClick={() => handleSkillSwitch("javascript")}>
          <img src="/javascript-icon-100x100.png" alt="javascript logo" />
        </a>
        <a onClick={() => handleSkillSwitch("nodeJS")}>
          <img src="/nodeJs-icon-100x100.png" alt="nodeJS icon" />
        </a>
        <a onClick={() => handleSkillSwitch("sql")}>
          <img src="/sql-icon-100x100.png" alt="sql logo" />
        </a>
        <a onClick={() => handleSkillSwitch("adobePhotoshop")}>
          <img src="/photoshop-100x100.png" alt="photoshop logo" />
        </a>
        <a onClick={() => handleSkillSwitch("adobePremierPro")}>
          <img src="/premierePro-100x100.png" alt="premier pro logo" />
        </a>
        <a onClick={() => handleSkillSwitch("adobeAfterEffects")}>
          <img src="/afterEffects-100x100.png" alt="after effects logo" />
        </a>
        <a onClick={() => handleSkillSwitch("adobeIllustrator")}>
          <img src="/illustrator-100x100.png" alt="illustrator logo" />
        </a>
        <a onClick={() => handleSkillSwitch("adobeInDesign")}>
          <img src="/inDesign-100x100.png" alt="inDesign logo" />
        </a>
        <a onClick={() => handleSkillSwitch("finalCutPro")}>
          <img src="/finalCutPro-100x100.png" alt="final cut pro logo" />
        </a>
      </div>
      {display === true ? (
        <div className={styles.skillContainer}>
          <SkillDisplay
            skillLogo={skillLogo}
            skill={skill}
            skillDescription={skillDescription}
            yearsOfExperience={yearsOfExperience}
          />
          <ProjectDisplay project={project} isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
}

export default SkillBox;
