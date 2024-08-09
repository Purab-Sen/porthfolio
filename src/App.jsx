import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills"
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Home />
      <About/>
      <Skills/>
      <Project />
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;