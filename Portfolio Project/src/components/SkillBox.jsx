import { useReducer } from "react";
import ProjectDisplay from "./ProjectDisplay";
import styles from "../components/SkillBox.module.css";
import SkillDisplay from "./SkillDisplay";

// Incorperate some way to display icons of skills so that they can navigate through the different skills. This operate the state.
const initialState = {
  skill: "react",
  skillDescription: "reactDescription",
  project: "reactProject",
  isLoading: false,
  yearsOfExperience: 1,
  skillLogo: "/react-icon-100x100.png",
};

function reducer(state, action) {
  switch (action.type) {
    case "skill/react":
      return {
        ...state,
        skill: "React",
        skillDescription:
          "React is my favorite library! I Love how efficient and fast it is!",
        project: "reactProject",
        yearsOfExperience: 2,
        skillLogo: "/react-icon-100x100.png",
      };
    case "skill/javascript":
      return {
        ...state,
        skill: "JavaScript",
        skillDescription:
          "JavaScript is incredible and I cannot stress its importance! It is what is making all of this happen right now!",
        project: "javascriptProject",
        yearsOfExperience: 2,
        skillLogo: "/javascript-icon-100x100.png",
      };
    case "skill/css":
      return {
        ...state,
        skill: "CSS",
        skillDescription:
          "CSS is one of my favorite things to do! It is so much fun being creative and designing things just the way you want them!",
        project: "cssProject",
        yearsOfExperience: 2,
        skillLogo: "/css-icon-100x100.png",
      };
    case "skill/html":
      return {
        ...state,
        skill: "HTML",
        skillDescription:
          "HTML is where it all started for me and many others I would imagine. Though it can be viewed by most as simple, I see it as essential and neccissary to learn!",
        project: "htmlProject",
        yearsOfExperience: 2,
        skillLogo: "/html-icon-100x100.png",
      };
    case "skill/nodeJS":
      return {
        ...state,
        skill: "Node.JS",
        skillDescription:
          "Node.JS would be my first backend language to learn. I very much enjoy using it 😀",
        project: "nodeJsProject",
        yearsOfExperience: 2,
        skillLogo: "/nodeJs-icon-100x100.png",
      };
    case "skill/sql":
      return {
        ...state,
        skill: "SQL",
        skillDescription: "SQL is neato mosquito",
        project: "sqlProject",
        yearsOfExperience: 2,
        skillLogo: "/sql-icon-100x100.png",
      };
    case "skill/adobePhotoshop":
      return {
        ...state,
        skill: "Adobe Photoshop",
        skillDescription:
          "I have been using Photoshop for roughly 8 years now! I have used photoshop for graphic design, photo editing, and content creation!",
        project: "photoshopProject",
        yearsOfExperience: 8,
        skillLogo: "/photoshop-100x100.png",
      };
    case "skill/adobePremierPro":
      return {
        ...state,
        skill: "Adobe Premier Pro",
        skillDescription:
          "Adobe Premier Pro has been my go-to video editing software as of late due to its incredible tools and user prefrences (and because I mainly use Windows😅",
        project: "adobePremierProProject",
        yearsOfExperience: 6,
        skillLogo: "/premierePro-100x100.png",
      };
    case "skill/finalCutPro":
      return {
        ...state,
        skill: "Final Cut Pro",
        skillDescription:
          "Final Cut Pro was actually the first video editing software that I used way back in 2014! I have always found Final Cut Pro to be very user friendly and easy to use. I also find Final Cut Pro capable of getting the job done quick without sacrificing quality!",
        project: "finalCutProProject",
        yearsOfExperience: 10,
        skillLogo: "/finalCutPro-100x100.png",
      };
    case "skill/adobeAfterEffects":
      return {
        ...state,
        skill: "Adobe After Effects",
        skillDescription:
          "Adobe After Effects is the top of the line when it comes to video editting and it is clear to see in the work that it is used for.",
        project: "adobeAfterEffectsProject",
        yearsOfExperience: 3,
        skillLogo: "/afterEffects-100x100.png",
      };
    case "skill/adobeIllustrator":
      return {
        ...state,
        skill: "Adobe Illustrator",
        skillDescription:
          "Adobe Illustrator has been a great tool for me in the last few years. I have used it to take many graphic designs into real world use such as tents or merchandise!",
        project: "illustratorProject",
        yearsOfExperience: 2,
        skillLogo: "/illustrator-100x100.png",
      };
    case "skill/adobeInDesign":
      return {
        ...state,
        skill: "Adobe InDesign",
        skillDescription:
          "Adobe InDesign has been my go to adobe product when it comes to postcards, newsletters, and more!",
        project: "adobeInDesignProject",
        yearsOfExperience: 2,
        skillLogo: "/inDesign-100x100.png",
      };
  }
}

// Skill icons must contain a value so that the dispatch can send the proper one

function SkillBox() {
  const [
    {
      skill,
      skillDescription,
      project,
      isLoading,
      yearsOfExperience,
      skillLogo,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSkillSwitch(skill, imageURL) {
    dispatch({ type: `skill/${skill}`, payload: imageURL });
  }

  return (
    <div className={styles.container}>
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
        <a onClick={() => handleSkillSwitch("finalCutPro")}>
          <img src="/finalCutPro-100x100.png" alt="final cut pro logo" />
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
      </div>
      <div className={styles.skillContainer}>
        <SkillDisplay
          skillLogo={skillLogo}
          skill={skill}
          skillDescription={skillDescription}
          yearsOfExperience={yearsOfExperience}
        />
        <ProjectDisplay project={project} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default SkillBox;
