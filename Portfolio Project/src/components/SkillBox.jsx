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
      };
    case "skill/javascript":
      return {
        ...state,
        skill: "JavaScript",
        skillDescription:
          "JavaScript is incredible and I cannot stress its importance! It is what is making all of this happen right now!",
        project: "javascriptProject",
        yearsOfExperience: 2,
      };
    case "skill/css":
      return {
        ...state,
        skill: "CSS",
        skillDescription:
          "CSS is one of my favorite things to do! It is so much fun being creative and designing things just the way you want them!",
        project: "cssProject",
        yearsOfExperience: 2,
      };
    case "skill/html":
      return {
        ...state,
        skill: "HTML",
        skillDescription:
          "HTML is where it all started for me and many others I would imagine. Though it can be viewed by most as simple, I see it as essential and neccissary to learn!",
        project: "htmlProject",
        yearsOfExperience: 2,
      };
    case "skill/nodeJS":
      return {
        ...state,
        skill: "Node.JS",
        skillDescription:
          "Node.JS would be my first backend language to learn. I very much enjoy using it 😀",
        project: "nodeJsProject",
        yearsOfExperience: 2,
      };
    case "skill/sql":
      return {
        ...state,
        skill: "SQL",
        skillDescription: "SQL is neato mosquito",
        project: "sqlProject",
        yearsOfExperience: 2,
      };
    case "skill/adobePhotoshop":
      return {
        ...state,
        skill: "Adobe Photoshop",
        skillDescription:
          "I have been using Photoshop for roughly 8 years now! I have used photoshop for graphic design, photo editing, and content creation!",
        project: "photoshopProject",
        yearsOfExperience: 8,
      };
    case "skill/adobePremierPro":
      return {
        ...state,
        skill: "Adobe Premier Pro",
        skillDescription:
          "Adobe Premier Pro has been my go-to video editing software as of late due to its incredible tools and user prefrences (and because I mainly use Windows😅",
        project: "adobePremierProProject",
        yearsOfExperience: 6,
      };
    case "skill/finalCutPro":
      return {
        ...state,
        skill: "Final Cut Pro",
        skillDescription:
          "Final Cut Pro was actually the first video editing software that I used way back in 2014! I have always found Final Cut Pro to be very user friendly and easy to use. I also find Final Cut Pro capable of getting the job done quick without sacrificing quality!",
        project: "finalCutProProject",
        yearsOfExperience: 10,
      };
    case "skill/adobeAfterEffects":
      return {
        ...state,
        skill: "Adobe After Effects",
        skillDescription:
          "Adobe After Effects is the top of the line when it comes to video editting and it is clear to see in the work that it is used for.",
        project: "adobeAfterEffectsProject",
        yearsOfExperience: 3,
      };
    case "skill/adobeIllustrator":
      return {
        ...state,
        skill: "Adobe Illustrator",
        skillDescription:
          "Adobe Illustrator has been a great tool for me in the last few years. I have used it to take many graphic designs into real world use such as tents or merchandise!",
        project: "illustratorProject",
        yearsOfExperience: 2,
      };
    case "skill/adobeInDesign":
      return {
        ...state,
        skill: "Adobe InDesign",
        skillDescription:
          "Adobe InDesign has been my go to adobe product when it comes to postcards, newsletters, and more!",
        project: "adobeInDesignProject",
        yearsOfExperience: 2,
      };
  }
}

// Skill icons must contain a value so that the dispatch can send the proper one

function SkillBox() {
  const [
    { skill, skillDescription, project, isLoading, yearsOfExperience },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSkillSwitch(skill) {
    dispatch({ type: `skill/${skill}` });
  }

  return (
    <div className={styles.container}>
      <div className={styles.skillsRow}>
        <a onClick={() => handleSkillSwitch("react")}></a>
        <a onClick={() => handleSkillSwitch("html")}>Change me to React</a>
        <a onClick={() => handleSkillSwitch("css")}>Change me to React</a>
        <a onClick={() => handleSkillSwitch("javascript")}>
          Change me to React
        </a>
        <a onClick={() => handleSkillSwitch("nodeJS")}>Change me to nodeJS</a>
        <a onClick={() => handleSkillSwitch("sql")}>Change me to sql</a>
      </div>
      <div className={styles.skillContainer}>
        <SkillDisplay
          skill={skill}
          skillDescription={skillDescription}
          yearsOfExperience={yearsOfExperience}
        />
        <ProjectDisplay project={project} isLoading={isLoading} />
      </div>
      <div className={styles.skillsRow}>
        <a onClick={() => handleSkillSwitch("adobePhotoshop")}>
          Change me to adobePhotoshop
        </a>
        <a onClick={() => handleSkillSwitch("adobePremierPro")}>
          Change me to adobePremierPro
        </a>
        <a onClick={() => handleSkillSwitch("finalCutPro")}>
          Change me to finalCutPro
        </a>
        <a onClick={() => handleSkillSwitch("adobeAfterEffects")}>
          Change me to adobeAfterEffects
        </a>
        <a onClick={() => handleSkillSwitch("adobeIllustrator")}>
          Change me to adobeIllustrator
        </a>
        <a onClick={() => handleSkillSwitch("adobeInDesign")}>
          Change me to adobeInDesign
        </a>
      </div>
    </div>
  );
}

export default SkillBox;
