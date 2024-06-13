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
        <h2>{skill}</h2>
        {yearsOfExperience === 1 ? (
          <p>{yearsOfExperience} year of experience</p>
        ) : (
          <p>{yearsOfExperience} years of experience</p>
        )}
      </div>
      <p>{skillDescription}</p>
    </div>
  );
}

export default SkillDisplay;
