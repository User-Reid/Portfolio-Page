import styles from "./ProjectDisplay.module.css";

function ProjectDisplay({ isLoading, project }) {
  return (
    <p className={styles}>
      display projects via video or images here with link to github pages
    </p>
  );
}

export default ProjectDisplay;
