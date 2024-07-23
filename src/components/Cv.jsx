import {Button} from "flowbite-react"

export default function Cv() {
  return (
    <div className="w-4/5 mx-auto bg-slate-200" id="experience">
      <h1>Experiances</h1>
      <p>CLick below to access my CV</p>
      <a href="#header">
        <Button size="xl" gradientDuoTone="purpleToBlue"><h1 className="text-2xl my-1">MY CV</h1></Button>
      </a>
    </div>
  );
}
