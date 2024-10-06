import "./splitter.css"
import Image from "next/image";
import splitImg from "../../public/splitterImg.png";
export default function splitter(){
    return (
        <div className="cover">
             <div className="cutter_container">
                <div className="men">
                    <div className="menItems">HOW IT WORKS</div>
                </div>
                <div className="heading">Splitter AI</div>
                <h3 className="des">Split music into separated parts with AI-Powered algorithms</h3>
                <Image className="splitImg" src={splitImg} alt="splitImg"/>
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}