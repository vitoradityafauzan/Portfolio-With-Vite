// import { Button, Navbar } from "flowbite-react";
import mainLogo from "../assets/head-icon.png";

export default function Header() {
  return (
    <>
      <div className="border-4 border-red-50 flex flex-col justify-center">
        <img src={mainLogo} alt="Logo" className="h-auto w-[25%] mx-auto" />
        {/* <h1 className="mx-auto mt-14 text-[3.6em] tracking-widest font-mono">Welcommen</h1> */}
      </div>
      
      {/* <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={mainLogo} className="mr-3 h-auto w-2/6" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar> */}
      {/* <div className="grid grid-cols-2 w-4/5 m-auto">
        <div className="border-4 mx-auto my-auto">
          <img src={mainLogo} className="h-2/5 w-3/5" />
        </div>
        <div className="border-2 grid grid-cols-3 gap-x-4">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="w-full">
            <div className="border-4 grid grid-cols-3 my-auto h-14 content-center">
             
                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              <h1 className="">Projects</h1>
            </div>
          </a>

          <div className="border-4 my-auto h-14">f</div>
          <div className="border-4 my-auto h-14">f</div>
        </div>
      </div> */}
    </>
  );
}
