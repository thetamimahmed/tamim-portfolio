import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Lenis from '@studio-freight/lenis'


const App = () => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (
    <div className="bg-[#1F1F1F]">
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default App;