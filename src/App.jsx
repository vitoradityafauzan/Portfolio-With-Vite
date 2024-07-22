import "./index.css";
import Separator from "./components/Separator";
// eslint-disable-next-line no-undef
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-items-center">
        <div className="w-full p-4">
          <Header />
        </div>
        <Greeting />
        <Separator />
        <div className="w-4/5 mx-auto bg-slate-500">
          <Projects />
        </div>
        <Separator />
        <Skills />
        <Separator />
        
      </div>
    </>
  );
}

export default App;
