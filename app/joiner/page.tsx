import "./joiner.css"
export default function joiner(){
    return(
        <div className="cover">
             <div className="cutter_container">
                <div className="heading">Audio Joiner</div>
                <h3 className="des">Join multiple audio tracks into one. Choose audio files you want to merge</h3>
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}