import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

function ProjectDisplay({ isLoading, project }) {
  const isWideScreen = window.innerWidth > 390;
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    setVisible(true);
  }, []);

  const style = {
    opacity: visible ? 1 : 0,
    transition: "opacity 1s ease-in-out", // Change duration and timing as needed
    textAlign: "center",
  };

  return (
    // <p className={styles}>
    //   display projects via video or images here with link to github pages
    // </p>
    <div
      style={{
        width: isWideScreen ? "50%" : "",
        height: isWideScreen ? "" : "",
      }}
    >
      <ReactPlayer
        url={project}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        style={style}
      />
    </div>
  );
}

export default ProjectDisplay;
