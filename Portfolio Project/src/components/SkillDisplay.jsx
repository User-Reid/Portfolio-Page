function SkillDisplay({ skill, yearsOfExperience, skillDescription }) {
  return (
    <div>
      <h2>{skill}</h2>
      <p>{yearsOfExperience}</p>
      <p>{skillDescription}</p>
    </div>
  );
}

export default SkillDisplay;
