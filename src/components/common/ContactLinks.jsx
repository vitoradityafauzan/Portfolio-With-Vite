import tele from "../../assets/icons/telegram.png";
import github from "../../assets/icons/github.png";
import gitlab from "../../assets/icons/gitlab.png";
import twitter from "../../assets/icons/twitter.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import linkedin from "../../assets/icons/linkedin.webp";

export default function ContactLinks() {
  return (
    <div className="w-4/5 mx-auto mt-4 border-0 flex flex-cols justify-center gap-4 md:gap-12 xl:gap-20">
      <img src={tele} alt="tele" className="w-[10%] md:w-8 lg:w-12 border-0" />
      <img src={github} alt="github" className="w-[10%] md:w-8 lg:w-12 border-0" />
      <img src={gitlab} alt="gitlab" className="w-[10%] md:w-8 lg:w-12 border-0" />
      <img src={whatsapp} alt="whatsapp" className="w-[10%] md:w-8 lg:w-12 border-0" />
      <img src={twitter} alt="twitter" className="w-[10%] md:w-8 lg:w-12 border-0" />
      <img src={linkedin} alt="linkedin" className="w-[10%] md:w-8 lg:w-12" />
    </div>
  );
}
