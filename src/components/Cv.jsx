import {Button} from "flowbite-react"

export default function Cv() {
  return (
    <div className="w-4/5 mx-auto " id="experience">
      <h1 id="section-title">Experiances</h1>
      <p className="text-center text-xl mt-7 mb-9">Click below to access my CV</p>
        <Button size="lg" gradientDuoTone="purpleToBlue" href="https://drive.google.com/file/d/1YliXYK_RpZ-DwpMf3PVjSuTR1kDjdKh4/view?usp=sharing" className="w-36 mx-auto"><h1 className="text-2xl my-2">MY CV</h1></Button>
    </div>
  );
}
