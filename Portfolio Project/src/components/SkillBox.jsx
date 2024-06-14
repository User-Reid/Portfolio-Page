import { useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import styles from "../components/SkillBox.module.css";
import SkillDisplay from "./SkillDisplay";
import PropTypes from "prop-types";

// Skill icons must contain a value so that the dispatch can send the proper one

function SkillBox({
  dispatch,
  skill,
  isLoading,
  project,
  yearsOfExperience,
  skillLogo,
  bgColor,
  skillDescription,
}) {
  const [display, setDisplay] = useState(false);

  function handleSkillSwitch(x, imageURL) {
    if (skill === x) {
      setDisplay(!display);
    } else {
      setDisplay(true);
      dispatch({ type: `skill/${x}`, payload: imageURL });
    }
  }

  return (
    <div
      className={styles.container}
      style={{ background: bgColor === "" ? "" : bgColor }}
    >
      <div className={styles.skillRow}>
        <a onClick={() => handleSkillSwitch("React")}>
          <img src="/react-icon-100x100.png" alt="react logo" />
        </a>
        <a onClick={() => handleSkillSwitch("HTML")}>
          <img src="/html-icon-100x100.png" alt="html logo" />
        </a>
        <a onClick={() => handleSkillSwitch("CSS")}>
          <img src="/css-icon-100x100.png" alt="css logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Javascript")}>
          <img src="/javascript-icon-100x100.png" alt="javascript logo" />
        </a>
        <a onClick={() => handleSkillSwitch("NodeJS")}>
          <img src="/nodeJs-icon-100x100.png" alt="nodeJS icon" />
        </a>
        <a onClick={() => handleSkillSwitch("SQL")}>
          <img src="/sql-icon-100x100.png" alt="sql logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Adobe Photoshop")}>
          <img src="/photoshop-100x100.png" alt="photoshop logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Adobe Premiere Pro")}>
          <img src="/premierePro-100x100.png" alt="premier pro logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Adobe After Effects")}>
          <img src="/afterEffects-100x100.png" alt="after effects logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Adobe Illustrator")}>
          <img src="/illustrator-100x100.png" alt="illustrator logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Adobe InDesign")}>
          <img src="/inDesign-100x100.png" alt="inDesign logo" />
        </a>
        <a onClick={() => handleSkillSwitch("Final Cut Pro")}>
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

SkillBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  skill: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  project: PropTypes.string.isRequired,
  yearsOfExperience: PropTypes.number.isRequired,
  skillLogo: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  skillDescription: PropTypes.string.isRequired,
};

export default SkillBox;
