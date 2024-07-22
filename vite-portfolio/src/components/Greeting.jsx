import greetLogo from "../assets/coding.png"
import tele from "../assets/icons/telegram.png"
import github from "../assets/icons/github.png"
import gitlab from "../assets/icons/gitlab.png"
import twitter from "../assets/icons/twitter.png"
import whatsapp from "../assets/icons/whatsapp.png"
import linkedin from "../assets/icons/linkedin.webp"

export default function Greeting() {
    return (
        <>
            <div className="w-4/5 mx-auto bg-slate-600 grid grid-cols-2">
                <div className="border-4 h-auto">
                    <p>Greetings, I am</p>
                    <h1>Vito Raditya Fauzan</h1>
                    <ol>
                        <li>Web Develper Enthusiast</li>
                        <li>Web Develper Enthusiast</li>
                    </ol>
                </div>
                <div className="border-4 h-auto">
                    <img src={greetLogo} alt="coding" className="w-3/4" />
                </div>
                <div className="col-span-2 border-4">
                    <div className="grid grid-cols-6">
                        <img src={tele} alt="tele" />
                        <img src={github} alt="github" />
                        <img src={gitlab} alt="gitlab" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>
        </>
    )
}