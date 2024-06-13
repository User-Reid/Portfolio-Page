import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import SkillBox from "./components/SkillBox";
import styles from "./App.module.css";
// import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Content>
        <SkillBox>{/* <ProjectDisplay /> */}</SkillBox>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
