import greetLogo from "../assets/coding.png";
// import tele from "../assets/icons/telegram.png"
// import github from "../assets/icons/github.png"
// import gitlab from "../assets/icons/gitlab.png"
// import twitter from "../assets/icons/twitter.png"
// import whatsapp from "../assets/icons/whatsapp.png"
// import linkedin from "../assets/icons/linkedin.webp"

export default function Greeting() {
  return (
    <>
      <div className="w-10/12 md:w-4/5 mx-auto mb-4 grid md:grid-cols-2">
        <div className="border-0 h-auto xl:pl-20 pt-20">
          <p className="text-2xl xl:text-[1.7em] font-normal font-sarif">Greetings, I am</p>
          <h1 className="text-[1.7em] xl:text-[2.5em] mt-4 text-[#0000ff]">Vito Raditya Fauzan</h1>
          <ul  className="list-disc mt-5 ml-7 md:ml-12 text-[1.2em] xl:text-[1.7em] font-semibold leading-relaxed">
            <li>Web Develper Enthusiast</li>
            <li>Backend Develper Enthusiast</li>
          </ul>
        </div>
        <div className="border-0 h-auto">
          <img src={greetLogo} alt="coding" className="w-5/6 mx-auto " />
        </div>
        {/* <div className="col-span-2 border-4">
                    <div className="grid grid-cols-6">
                        <img src={tele} alt="tele" />
                        <img src={github} alt="github" />
                        <img src={gitlab} alt="gitlab" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div> */}
      </div>
    </>
  );
}
