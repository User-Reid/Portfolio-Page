import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillBox from "./components/SkillBox";
import styles from "./App.module.css";
import { useReducer } from "react";
// import ProjectDisplay from "./components/ProjectDisplay";

const initialState = {
  skill: "",
  skillDescription: "",
  project: "",
  isLoading: false,
  yearsOfExperience: 1,
  skillLogo: "",
  bgColor: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "skill/React":
      return {
        ...state,
        skill: "React",
        skillDescription:
          "React is my favorite library! I Love how efficient and fast it is!",
        project: "https://youtu.be/ilocOyuerS0",
        yearsOfExperience: 2,
        skillLogo: "/react-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, lightblue, white)",
      };
    case "skill/Javascript":
      return {
        ...state,
        skill: "Javascript",
        skillDescription:
          "JavaScript is incredible and I cannot stress its importance! It is what is making all of this happen right now!",
        project: "https://youtu.be/JY8oUxNEByA",
        yearsOfExperience: 2,
        skillLogo: "/javascript-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, yellow, white)",
      };
    case "skill/CSS":
      return {
        ...state,
        skill: "CSS",
        skillDescription:
          "CSS is one of my favorite things to do! It is so much fun being creative and designing things just the way you want them!",
        project: "https://youtu.be/fo35K3wcJ9c",
        yearsOfExperience: 2,
        skillLogo: "/css-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, blue, white)",
      };
    case "skill/HTML":
      return {
        ...state,
        skill: "HTML",
        skillDescription:
          "HTML is where it all started for me and many others I would imagine. Though it can be viewed by most as simple, I see it as essential and neccissary to learn!",
        project: "https://youtu.be/_vZDpPBjce0",
        yearsOfExperience: 2,
        skillLogo: "/html-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, orange, white)",
      };
    case "skill/NodeJS":
      return {
        ...state,
        skill: "NodeJS",
        skillDescription:
          "Node.JS would be my first backend language to learn. I very much enjoy using it 😀",
        project: "https://youtu.be/oXZHO_oVvfM",
        yearsOfExperience: 2,
        skillLogo: "/nodeJs-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, green, white)",
      };
    case "skill/SQL":
      return {
        ...state,
        skill: "SQL",
        skillDescription: "SQL is neato mosquito",
        project: "https://youtu.be/SQ6LOdDTYGY",
        yearsOfExperience: 2,
        skillLogo: "/sql-icon-100x100.png",
        bgColor: "linear-gradient(to bottom, lightblue, white)",
      };
    case "skill/Adobe Photoshop":
      return {
        ...state,
        skill: "Adobe Photoshop",
        skillDescription:
          "I have been using Photoshop for roughly 8 years now! I have used photoshop for graphic design, photo editing, and content creation!",
        project: "photoshopProject",
        yearsOfExperience: 8,
        skillLogo: "/photoshop-100x100.png",
        bgColor: "linear-gradient(to bottom, darkblue, white)",
      };
    case "skill/Adobe Premiere Pro":
      return {
        ...state,
        skill: "Adobe Premiere Pro",
        skillDescription:
          "Adobe Premier Pro has been my go-to video editing software as of late due to its incredible tools and user prefrences (and because I mainly use Windows😅",
        project: "adobePremierProProject",
        yearsOfExperience: 6,
        skillLogo: "/premierePro-100x100.png",
        bgColor: "linear-gradient(to bottom, purple, white)",
      };
    case "skill/Final Cut Pro":
      return {
        ...state,
        skill: "Final Cut Pro",
        skillDescription:
          "Final Cut Pro was actually the first video editing software that I used way back in 2014! I have always found Final Cut Pro to be very user friendly and easy to use. I also find Final Cut Pro capable of getting the job done quick without sacrificing quality!",
        project: "finalCutProProject",
        yearsOfExperience: 10,
        skillLogo: "/finalCutPro-100x100.png",
        bgColor: "linear-gradient(to bottom, pink, white)",
      };
    case "skill/Adobe After Effects":
      return {
        ...state,
        skill: "Adobe After Effects",
        skillDescription:
          "Adobe After Effects is the top of the line when it comes to video editting and it is clear to see in the work that it is used for.",
        project: "adobeAfterEffectsProject",
        yearsOfExperience: 3,
        skillLogo: "/afterEffects-100x100.png",
        bgColor: "linear-gradient(to bottom, purple, white)",
      };
    case "skill/Adobe Illustrator":
      return {
        ...state,
        skill: "Adobe Illustrator",
        skillDescription:
          "Adobe Illustrator has been a great tool for me in the last few years. I have used it to take many graphic designs into real world use such as tents or merchandise!",
        project: "illustratorProject",
        yearsOfExperience: 2,
        skillLogo: "/illustrator-100x100.png",
        bgColor: "linear-gradient(to bottom, orangered, white)",
      };
    case "skill/Adobe InDesign":
      return {
        ...state,
        skill: "Adobe InDesign",
        skillDescription:
          "Adobe InDesign has been my go to adobe product when it comes to postcards, newsletters, and more!",
        project: "adobeInDesignProject",
        yearsOfExperience: 2,
        skillLogo: "/inDesign-100x100.png",
        bgColor: "linear-gradient(to bottom, red, white)",
      };
    default:
      return state;
  }
}

function App() {
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

  return (
    <div className={styles.container}>
      <Header />
      <SkillBox
        dispatch={dispatch}
        skill={skill}
        skillDescription={skillDescription}
        project={project}
        isLoading={isLoading}
        yearsOfExperience={yearsOfExperience}
        skillLogo={skillLogo}
        bgColor={bgColor}
      />
      <Footer />
    </div>
  );
}

export default App;
