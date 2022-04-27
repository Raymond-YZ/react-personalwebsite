import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle"
import { useContext } from "react";
import { ThemeContext } from "./context";
import Gaming from "./components/gaming/Gaming";
const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style = {{backgroundColor:darkMode? "#222":"white", color: darkMode && "white"}}>

      <Toggle />
      <Intro />
      <About />
      <Gaming />
      <ProjectList />


    </div>

  );

};

export default App;