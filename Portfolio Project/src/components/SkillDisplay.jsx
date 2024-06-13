import styles from "./SkillDisplay.module.css";

function SkillDisplay({ skill, yearsOfExperience, skillDescription }) {
  return (
    <div className={styles.container}>
      <div className={styles.skillTextBox}>
        <h2>{skill}</h2>
        <p>{yearsOfExperience}</p>
      </div>
      <p>{skillDescription}</p>
    </div>
  );
}

export default SkillDisplay;
