import {React, useEffect}from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.React_APP_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
