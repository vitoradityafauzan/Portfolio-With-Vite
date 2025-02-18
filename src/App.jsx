import "./index.css";
import Separator from "./components/common/Separator";
// eslint-disable-next-line no-undef
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Cv from "./components/Cv";
import ContactLinks from "./components/common/ContactLinks";
import Contact from "./components/Contact";
import Footerr from "./components/Footerr";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col relative justify-items-center gap-2">
        <Header />
        <Greeting />
        <ContactLinks />
        <Separator />
        <Projects />
        <Separator />
        <Skills />
        <Separator />
        <Cv />
        <Separator />
        <Contact />
        <ContactLinks />
        <Footerr />
      </div>
    </>
  );
}

export default App;
