import styles from "./SkillDisplay.module.css";

function SkillDisplay({
  skill,
  yearsOfExperience,
  skillDescription,
  skillLogo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.skillTextBox}>
        <img src={skillLogo} />
        <div className={styles.skillAndYears}>
          <h2>{skill}</h2>
          {yearsOfExperience === 1 ? (
            <p>{yearsOfExperience} year of experience</p>
          ) : (
            <p>{yearsOfExperience} years of experience</p>
          )}
        </div>
      </div>
      <p className={styles.skillDescription}>{skillDescription}</p>
      <div className="projectIcons">
        <button>Project 1</button>
        <button>Project 2</button>
        <button>Project 3</button>
        <button>Project 4</button>
      </div>
    </div>
  );
}

export default SkillDisplay;
