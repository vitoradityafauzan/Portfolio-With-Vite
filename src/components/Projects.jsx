import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="flex flex-col">
        {/* Project #1 */}
        <div className="grid grid-cols-2">
            {/* project title */}
          <div className="col-span-2">
            <a href="">
              <div className="bg-blue-600 w-24 h-auto rounded-lg flex flex-row p-2">
                <FaGithub className="text-slate-50 size-7 my-auto"/>
                <h1 className="leading-8 ml-2 text-lg text-slate-50 font-semibold">MiKat</h1>
              </div>
            </a>
          </div>
          {/* Project desc */}
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cum mollitia harum eaque provident nobis, tempora voluptas hic ea animi excepturi labore delectus atque repellendus libero
            illo at blanditiis eum?
          </div>
          {/* Project sneekpeak */}
          <div>
            <img src="https://user-images.githubusercontent.com/29296109/224941351-48277b71-b9e5-4616-8f7d-c5f69e6052cc.jpeg" alt="" />
          </div>
          {/* Project techstacks */}
          <div className="col-span-2 grid grid-cols-2">
            <div className="border-4 flex flex-row gap-5">
                <h1 className="bg-blue-600 p-1 w-20 h-12 leading-8 font-semibold text-slate-50">Javascript</h1>
                <h1 className="bg-blue-600 p-1 w-20">Javascript</h1>
                <h1 className="bg-blue-600 p-1 w-20">Javascript</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
