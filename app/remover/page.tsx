import "./remover.css"
import Image from "next/image";
import removerImg from "../../public/remover.png";
export default function remover(){
    return (
        <div className="cover">
             <div className="cutter_container">
                <div className="men">
                    <div className="menItems">HOW IT WORKS</div>
                </div>
                <div className="heading">Vocal Remover and Isolation</div>
                <h3 className="des">Separate voice from music out of a song free with powerful AI algorithms</h3>
                <Image className="removerImg" src={removerImg} alt="removerImg"/> 
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}