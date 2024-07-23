/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { Button, Badge, Tooltip } from "flowbite-react";

export default function Projects() {
  return (
    <>
      {/* 
            <a href="">
              <Button color="blue">
                <FaGithub className="mr-2 h-5 w-5" />
                MiKat
              </Button>
            </a>

          <Tooltip content="The following link is unavailable">
              <Button color="blue">
                <FaGithub className="mr-2 h-5 w-5" />
                MiKat
              </Button>
            </Tooltip>

          <div className="border-4 flex flex-row gap-5">
              <h1 className="bg-blue-600 p-1 w-20 h-12 leading-8 font-semibold text-slate-50">Javascript</h1>
              <h1 className="bg-blue-600 p-1 w-20">Javascript</h1>
              <h1 className="bg-blue-600 p-1 w-20">Javascript</h1>
            </div>
    */}
      <div className="w-4/5 mx-auto flex flex-col relative" id="projects">
        <h1 id="section-title">Projects</h1>
        {/* Project #1 */}
        <div className="grid grid-cols-2 mb-12 gap-2">
          {/* Project sneekpeak - mobile */}
          <div className="md:hidden w-80 border-0">
            <img src="https://user-images.githubusercontent.com/29296109/224941351-48277b71-b9e5-4616-8f7d-c5f69e6052cc.jpeg" alt="" />
          </div>
          {/* project title */}
          <div className="col-span-2">
            <Tooltip content="The following link is unavailable">
              <Button color="blue">
                <FaGithub className="mr-2 h-5 w-5" />
                MiKat
              </Button>
            </Tooltip>
          </div>
          {/* Project desc */}
          <div className="w-80 md:w-auto text-justify border-0">
            This web app project was created for college's final project as part of the requirements to graduate and receive bachelor's degree in computer. The purpose of this web app project are to
            finds out personality types for user using MBTI theory, informs the user information about their personality and characteristics based on the MBTI test, and suggest the user jobs that are
            suitable for the user based on the MBTI tests result.
          </div>
          {/* Project sneekpeak - dekstop */}
          <div className="invisible md:visible w-4 h-0 md:w-auto md:h-auto border-0">
            <img src="https://user-images.githubusercontent.com/29296109/224941351-48277b71-b9e5-4616-8f7d-c5f69e6052cc.jpeg" alt="" className="w-0 h-0 md:w-auto md:h-auto" />
          </div>
          {/* Project techstacks */}
          <div className="col-span-2 flex flex-wrap gap-2 lg:mt-4 lg:w-2/4 border-0">
            <Badge color="purple" size="xl">
              NodeJS
            </Badge>
            <Badge color="purple" size="xl">
              ExpressJS
            </Badge>
            <Badge color="purple" size="xl">
              ReactJS & Redux
            </Badge>
            <Badge color="purple" size="xl">
              TailwindCSS
            </Badge>
            <Badge color="purple" size="xl">
              FlowbiteCSS
            </Badge>
            <Badge color="purple" size="xl">
              PostgreSQL
            </Badge>
            <Badge color="purple" size="xl">
              Jest
            </Badge>
          </div>
        </div>
        {/* Project #2 */}
        <div className="grid grid-cols-2 mb-12 gap-2">
          {/* Project sneekpeak - mobile */}
          <div className="md:hidden w-80 border-0">
            <img src="https://raw.githubusercontent.com/yehezkielermanto/SecondHandFE/master/imgViewApp/imgPreviewApp.png" alt="" />
          </div>
          {/* project title */}
          <div className="col-span-2">
            <a href="https://github.com/yehezkielermanto/SecondHandFE"  target="_blank">
              <Button color="blue">
                <FaGithub className="mr-2 h-5 w-5" />
                Second Hand
              </Button>
            </a>
          </div>
          {/* Project desc */}
          <div className="w-80 md:w-auto text-justify border-0">
          This web app project was created as part of the requirements to graduate from Independent Study of the Kampus Merdeka Program (MSIB MBKM) at Binar Academy. The purpose of this e-commerce web app project is to provide a platform for users to sell and buy used items (second hand items).
          </div>
          {/* Project sneekpeak - dekstop */}
          <div className="invisible md:visible w-4 h-0 md:w-auto md:h-auto border-0">
            <img src="https://raw.githubusercontent.com/yehezkielermanto/SecondHandFE/master/imgViewApp/imgPreviewApp.png" alt="" className="w-0 h-0 md:w-auto md:h-auto" />
          </div>
          {/* Project techstacks */}
          <div className="col-span-2 flex flex-wrap gap-2 lg:mt-4 lg:w-2/4 border-0">
            <Badge color="purple" size="xl">
              NodeJS
            </Badge>
            <Badge color="purple" size="xl">
              ExpressJS
            </Badge>
            <Badge color="purple" size="xl">
              ReactJS & Redux
            </Badge>
            <Badge color="purple" size="xl">
              TailwindCSS
            </Badge>
            <Badge color="purple" size="xl">
              FlowbiteCSS
            </Badge>
            <Badge color="purple" size="xl">
              PostgreSQL
            </Badge>
            <Badge color="purple" size="xl">
              Jest
            </Badge>
            <Badge color="purple" size="xl">
              SwaggerAPI
            </Badge>
            <Badge color="purple" size="xl">
              HerokuApp
            </Badge>
          </div>
        </div>
        {/* Project #3 */}
        <div className="grid grid-cols-2 gap-2">
          {/* Project sneekpeak - mobile */}
          <div className="md:hidden w-80 border-0">
            <img src="https://raw.githubusercontent.com/yehezkielermanto/SecondHandFE/master/imgViewApp/imgPreviewApp.png" alt="" />
          </div>
          {/* project title */}
          <div className="col-span-2">
            <a href="https://gitfront.io/r/vitoRF/DMELvESeCxUM/TegalpingenSite/"  target="_blank">
              <Button color="blue">
                <FaGithub className="mr-2 h-5 w-5" />
                Website SDN Tegal Pingen 1
              </Button>
            </a>
          </div>
          {/* Project desc */}
          <div className="w-80 md:w-auto text-justify border-0">
          This website project was created as part of the requirements to graduate from 5th Semester during college. The purpose of this website project is to provide a platform for information about Tegal Pingen 1 National Elementry School.
          </div>
          {/* Project sneekpeak - dekstop */}
          <div className="invisible md:visible w-4 h-0 md:w-auto md:h-auto border-0">
            <img src="https://raw.githubusercontent.com/yehezkielermanto/SecondHandFE/master/imgViewApp/imgPreviewApp.png" alt="" className="w-0 h-0 md:w-auto md:h-auto" />
          </div>
          {/* Project techstacks */}
          <div className="col-span-2 flex flex-wrap gap-2 lg:mt-4 lg:w-2/4 border-0">
            <Badge color="purple" size="xl">
              Laravel
            </Badge>
            <Badge color="purple" size="xl">
              Laragon
            </Badge>
            <Badge color="purple" size="xl">
              MySQL
            </Badge>
            <Badge color="purple" size="xl">
              BootstrapCSS
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}
