import "./keyBpm.css"
export default function keyBpm(){
    return(
        <div className="cover">
             <div className="cutter_container">
                <div className="men">
                    <div className="menItems">HOW IT WORKS</div>
                    <div className="menItems">TAP TEMPO</div>
                </div>
                <div className="heading">Song Key and BPM Finder</div>
                <h3 className="des">Analyzes music and finds Key, Scale and BPM for any song</h3>
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}