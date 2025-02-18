import laragon from "../assets/icons/laragon.png";

export default function Skills() {
  return (
    <div className="w-4/5 mx-auto flex flex-col" id="skills">
      <h1 id="section-title">Skills</h1>
      {/* tech stack title */}
      <h1 id="section-title2" className="text-center lg:text-start">
        Tech Stack
      </h1>
      {/* tech stack list */}
      <div className="col-span-2 flex flex-row flex-wrap gap-8 p-1 lg:w-[70%] lg:ml-auto lg:justify-end border-0">
        <div className="w-20 h-fit lg:w-28 border-0 border-red-600">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="node" className="mb-2 mx-auto border-0 border-red-100" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">HTML</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">CSS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Javascript</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Typescript</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Node JS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Express JS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">React JS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Next JS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Vite JS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Tailwind CSS</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">MySQL</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">SQL Server</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Postgre SQL</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Laravel</h1>
        </div>
      </div>
      {/* tools title */}
      <div className="p-4">
        <h1 id="section-title2" className="text-center lg:text-start">
          Tools
        </h1>
      </div>
      {/* tools list */}
      <div className="flex flex-row flex-wrap gap-8 p-1 lg:w-[70%] lg:ml-auto lg:justify-end border-0">
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Visual Studio Code</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">NPM</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Yarn</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">PostMan</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">GIT</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="jwt" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">JWT Auth</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="/images/formik.png" alt="formik" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Formik</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="prisma" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Prisma</h1>
        </div>
        <div className="w-20 h-fit lg:w-28 border-0">
          <img src={laragon} alt="node" className=" mb-2 mx-auto" />
          <h1 className="text-center font-mono font-normal text-lg lg:text-2xl tracking-normal text-zinc-800">Laragon</h1>
        </div>
      </div>
    </div>
  );
}
